import React, { useState, useCallback, createContext } from 'react';

interface IApp {
    showMenu: boolean;
    component: string;
    showComponent(comp: string): void;
    menuOn(): void;
    menuOff(): void;
    menuError: { name: string, message: string } | null;
    setMenuError(err: { name: string, message: string } | null): void;
    showMenuError: boolean;

}

export const AppContext = createContext<IApp>({
    showMenu: true,
    component: 'grid',
    showComponent: () => { },
    menuOn: () => { },
    menuOff: () => { },
    menuError: { name: '', message: '' },
    setMenuError: () => { },
    showMenuError: false,
});

function AppContextProvider({ children }: { children: any }) {

    const [showMenu, setShowMenu] = useState(false);
    const [component, setComponent] = useState('grid');
    const showComponent = (comp: string) => { setComponent(comp) }
    const menuOn = () => { setShowMenu(true) }
    const menuOff = () => { setShowMenu(false) }
    const [menuError, setMenuError] = useState<{ name: string, message: string } | null>(null);

    const contextValue = {
        showMenu,
        component,
        showComponent: useCallback((comp: string) => showComponent(comp), []),
        menuOn: useCallback(() => menuOn(), []),
        menuOff: useCallback(() => menuOff(), []),
        menuError,
        setMenuError: useCallback((err: { name: string, message: string } | null) => {
            setMenuError(err);

            setTimeout(() => {
                setMenuError(null);
            }, 5000);
        }, []),
        showMenuError: menuError !== null,
    };

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    );
}

export default AppContextProvider;
