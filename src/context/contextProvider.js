import React, { createContext, useContext, useState, useEffect } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
    const [breakLength, setBreakLength] = useState(5)
    const [sessionLength, setSessionLength] = useState(25)

    useEffect(() => {


    }, []);

    return (
        <StateContext.Provider
            value={{
                breakLength,
                setBreakLength,
                sessionLength,
                setSessionLength,
            }}
        >
            {children}
        </StateContext.Provider>
    )
}


export const useStateContext = () => useContext(StateContext)