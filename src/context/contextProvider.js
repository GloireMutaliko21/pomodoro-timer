import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
    const [optionsShow, setOptionsShow] = useState(false)
    const [sessionLength, setSessionLength] = useState(25)
    const [breakLength, setBreakLength] = useState(5)

    return (
        <StateContext.Provider
            value={{
                optionsShow, setOptionsShow,
                sessionLength, setSessionLength,
                breakLength, setBreakLength
            }}
        >
            {children}
        </StateContext.Provider>
    )
}


export const useStateContext = () => useContext(StateContext)