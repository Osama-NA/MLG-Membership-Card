import React, { createContext, useState } from "react";

const DEFAULT = {
    gamerTag: "",
    weapon: "",
    skill: ""
}

const GamerDetailsContext = createContext(DEFAULT);

const GamerDetailsContextProvider = ({ children }) => {
    const [gamerDetails, setGamerDetails] = useState(DEFAULT)

    return (
        <GamerDetailsContext.Provider value={{ gamerDetails, setGamerDetails }}>
            {children}
        </GamerDetailsContext.Provider>
    );
};

export { GamerDetailsContextProvider, GamerDetailsContext };