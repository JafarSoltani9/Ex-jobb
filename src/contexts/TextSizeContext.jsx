// TextSizeContext.js
import { createContext, useState, useContext } from "react";

export const TextSizeContext = createContext(null);

export const TextSizeProvider = ({ children }) => {
    const [updateTextSize, setUpdateTextSize] = useState(1);

    return (
        <TextSizeContext.Provider value={{ updateTextSize, setUpdateTextSize }}>
            {children}
        </TextSizeContext.Provider>
    );
};

export const useTextSize = () => {
    return useContext(TextSizeContext);
};
