import { createContext, useState, useContext } from "react";

export const ShowLinkContext = createContext(null);

export const ShowLinkProvider = ({ children }) => {
    const [updateShowLink, setUpdateShowLink] = useState(1);

    return (
        <ShowLinkContext.Provider value={{ updateShowLink, setUpdateShowLink }}>
            {children}
        </ShowLinkContext.Provider>
    );
};

export const useShowLink = () => {
    return useContext(ShowLinkContext);
};
