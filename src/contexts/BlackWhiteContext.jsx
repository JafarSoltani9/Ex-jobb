import { createContext, useState, useContext } from "react";

export const BlackWhiteContext = createContext(null);

export const BlackWhiteProvider = ({ children }) => {
    const [updateBlackWhite, setUpdateBlackWhite] = useState(false);

    return (
        <BlackWhiteContext.Provider value={{ updateBlackWhite, setUpdateBlackWhite }}>
            {children}
        </BlackWhiteContext.Provider>
    );
};

export const useBlackWhite = () => {
    return useContext(BlackWhiteContext);
};
