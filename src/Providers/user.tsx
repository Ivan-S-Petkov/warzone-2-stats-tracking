import React, { useState, useCallback, createContext, useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, User } from "firebase/auth";


const auth = getAuth();

interface IUser {
    user: User | null;
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

    const contextValue = {
        user: null,
        authenticated: user !== null,
        loadingAuthState: false,
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user: any) => {
            if (user) {
                setUser(user);
                console.log(user);

            } else {
                console.log(user);
                setUser(null);
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
