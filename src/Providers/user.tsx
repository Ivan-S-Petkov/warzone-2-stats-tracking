import React, { useState, createContext, useEffect, useContext, useCallback } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { AppContext } from './global';
import { readUserData, writeUserData } from 'src/modules/User/api/firestore';
import { login, platforms } from 'src/api/COD/call-of-duty';

const auth = getAuth();

export interface UserDB {
    id: string,
    name: string,
    email: string,
    admin: boolean,
    imageUrl: string,
    accountType: platforms,
    accountName: string,
    friends: string[]
}

interface IUser {
    user: UserDB;
    authenticated: boolean;
    admin: boolean;
    loadingAuthState: boolean;
    setUserData(user: UserDB): void;
    getUserData(id: string): void;
}

export const UserContext = createContext<IUser>({
    user: {} as UserDB,
    authenticated: false,
    admin: false,
    loadingAuthState: true,
    setUserData: () => { },
    getUserData: () => { },
});

function UserContextProvider({ children }: { children: any }) {

    const [user, setUser] = useState({} as UserDB);
    const [loadingAuthState, setLoadingAuthState] = useState(true);

    const navigate = useNavigate();
    const { menuOff } = useContext(AppContext)
    const setUserData = (user: any) => { setUser(user) };

    const contextValue = {
        user: user,
        authenticated: user.id !== undefined,
        admin: user.admin !== undefined,
        loadingAuthState: false,
        setUserData: useCallback((user: UserDB) => setUserData(user), []),
        getUserData: useCallback((id: string) => {
            readUserData(id)
                .then((res: any) => {
                    if (res) {
                        setUser(res);
                    }
                })
        }, [])
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user: any) => {
            login(
                'MTA4Mjc0MjU0Nzg5NDcyNDUwNDg6MTY1NTM4NTE3OTk1NToyN2ZlZTljZWUzMjllNTkxOTAzMTE5MDc5Njk1ZTYzYw'
            );

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
                                admin: user.admin || false,
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
                setUser({} as UserDB);
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
