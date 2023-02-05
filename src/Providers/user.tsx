import React, { useState, useCallback, createContext, useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

const auth = getAuth();

interface IUser {
    logged: boolean;
    setLoggedStatus(status: boolean): void;
    logIn(email: string, password: string): void;
    signUp(email: string, password: string): void;
    logOut(): void;
}

export const UserContext = createContext<IUser>({
    logged: false,
    setLoggedStatus: () => { },

    logIn: () => { },
    signUp: () => { },
    logOut: () => { },
});


function UserContextProvider({ children }: { children: any }) {

    const [logged, setLogged] = useState(false);
    const setLoggedStatus = (status: boolean) => { setLogged(status) };

    const logIn = (email: string, password: string) => { return signInWithEmailAndPassword(auth, email, password) };
    const signUp = (email: string, password: string) => { return createUserWithEmailAndPassword(auth, email, password) };
    const logOut = () => { return signOut(auth) };


    const contextValue = {
        logged,
        setLoggedStatus: useCallback((status: boolean) => setLoggedStatus(status), []),
        logIn: useCallback((email: string, password: string) => logIn(email, password), []),
        signUp: useCallback((email: string, password: string) => signUp(email, password), []),
        logOut: useCallback(() => logOut(), []),
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            console.log("Auth", user);
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
