import React, { useState, createContext, useEffect, useContext, useCallback } from 'react';
import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { AppContext } from './global';
import { readUserData, writeUserData } from 'src/modules/User/api/firestore';

const auth = getAuth();

export interface UserDB {
    id: string,
    name: string,
    email: string,
    imageUrl: string,
    accountType: string,
    accountName: string,
    friends: []
}

interface IUser {
    user: UserDB | null;
    authenticated: boolean;
    loadingAuthState: boolean;
    setUserData(user: UserDB): void;
}

export const UserContext = createContext<IUser>({
    user: null,
    authenticated: false,
    loadingAuthState: true,
    setUserData: () => { },
});


function UserContextProvider({ children }: { children: any }) {

    const [user, setUser] = useState(null);
    const [loadingAuthState, setLoadingAuthState] = useState(true);

    const navigate = useNavigate();
    const { menuOff } = useContext(AppContext)
    const setUserData = (user: any) => { setUser(user) };

    const contextValue = {
        user: user,
        authenticated: user !== null,
        loadingAuthState: false,
        setUserData: useCallback((user: UserDB) => setUserData(user), [])
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user: any) => {
            if (user) {
                readUserData(user.uid)
                    .then((res: any) => {
                        if (res) {
                            setUser(res);
                        } else {
                            const userDB: any = {
                                id: user.uid,
                                name: user.displayName || '',
                                email: user.email || '',
                                imageUrl: user.photoURL || '',
                                accountType: '',
                                accountName: '',
                                friends: []
                            };
                            writeUserData(user.uid, userDB)
                                .then(() => { setUser(userDB); })
                                .catch((err) => { console.error("Error adding document", err) });
                        }
                    })
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
