import React, { useState, createContext, useEffect, useContext } from 'react';
import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { AppContext } from './global';


const auth = getAuth();

interface IUser {
    user: any | null;
    authenticated: boolean;
    loadingAuthState: boolean;
}

export const UserContext = createContext<IUser>({
    user: null,
    authenticated: false,
    loadingAuthState: true,
});


function UserContextProvider({ children }: { children: any }) {

    const [user, setUser] = useState(null);
    const [loadingAuthState, setLoadingAuthState] = useState(true);

    const navigate = useNavigate();
    const { menuOff } = useContext(AppContext)

    const contextValue = {
        user: user,
        authenticated: user !== null,
        loadingAuthState: false,
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user: any) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
                menuOff();
                navigate('/');
            }
            setLoadingAuthState(false);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContextProvider;
