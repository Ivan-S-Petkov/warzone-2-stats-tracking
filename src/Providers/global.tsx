import React, { useState, useCallback, createContext } from 'react';

interface IApp {
    showMenu: boolean;
    menuOn(): void;
    menuOff(): void;
}

export const AppContext = createContext<IApp>({
    showMenu: true,
    menuOn: () => { },
    menuOff: () => { },
});

function AppContextProvider({ children }: { children: any }) {

    const [showMenu, setShowMenu] = useState(false);
    const menuOn = () => { setShowMenu(true) }
    const menuOff = () => { setShowMenu(false) }

    const contextValue = {
        showMenu,
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
