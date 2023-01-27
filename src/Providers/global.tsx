import React, { useState, useCallback, createContext } from 'react';

interface IApp {
    showMenu: boolean;
    component: string;
    showComponent(comp: string): void;
    menuOn(): void;
    menuOff(): void;
}

export const AppContext = createContext<IApp>({
    showMenu: true,
    component: 'grid',
    showComponent: () => { },
    menuOn: () => { },
    menuOff: () => { },
});

function AppContextProvider({ children }: { children: any }) {

    const [showMenu, setShowMenu] = useState(false);
    const [component, setComponent] = useState('grid');
    const showComponent = (comp: string) => { setComponent(comp) }
    const menuOn = () => { setShowMenu(true) }
    const menuOff = () => { setShowMenu(false) }

    const contextValue = {
        showMenu,
        component,
        showComponent: useCallback((comp: string) => showComponent(comp), []),
        menuOn: useCallback(() => menuOn(), []),
        menuOff: useCallback(() => menuOff(), []),
    };

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    );
}

export default AppContextProvider;
