import { createContext, useState, useContext } from "react";

export const TextSpaceContext = createContext(null);

export const TextSpaceProvider = ({ children }) => {
    const [updateTextSpace, setUpdateTextSpace] = useState(1);

    return (
        <TextSpaceContext.Provider value={{ updateTextSpace, setUpdateTextSpace }}>
            {children}
        </TextSpaceContext.Provider>
    );
};

export const useTextSpace = () => {
    return useContext(TextSpaceContext);
};
