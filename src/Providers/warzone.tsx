import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { Warzone2 } from "src/api/COD/call-of-duty";
import { UserContext } from "./user";

export const WarzoneContext = createContext({
    solder: {},
    setSolderData: (soler: any) => { },
    getSolderData: (user: any) => { },
});

function WarzoneContextProvider({ children }: { children: any }) {

    const [solder, setSolder] = useState({} as any);
    const { user } = useContext(UserContext);

    const setSolderData = (solder: any) => { setSolder(solder) };

    const contextValue = {
        solder: solder,
        setSolderData: useCallback((solder: any) => setSolderData(solder), []),
        getSolderData: useCallback((user: any) => {
            Warzone2.fullData(user.accountName, user.accountType)
                .then((res) => {
                    console.log(res);
                    setSolder(res.data);
                })
                .catch((err) => {
                    console.log(err);
                })
        }, [])
    };

    useEffect(() => {
        if (user.accountName && user.accountType) {
            Warzone2.fullData(user.accountName, user.accountType)
                .then((res) => {
                    console.log(res);
                    setSolder(res.data);
                })
                .catch((err) => {
                    console.log(err);
                })
        }

        return () => {
        }
    }, [user])


    return (
        <WarzoneContext.Provider value={contextValue}>
            {children}
        </WarzoneContext.Provider>
    );
}

export default WarzoneContextProvider;