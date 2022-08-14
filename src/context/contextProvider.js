import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
    const [breakLength, setBreakLength] = useState(60)
    const [sessionLength, setSessionLength] = useState(90000)
    const [isSessionTime, setIsSessionTime] = useState(true)
    const [isBreakTime, setIsBreakTime] = useState(false)

    return (
        <StateContext.Provider
            value={{
                breakLength, setBreakLength,
                sessionLength, setSessionLength,
                isSessionTime, setIsSessionTime,
                isBreakTime, setIsBreakTime,
            }}
        >
            {children}
        </StateContext.Provider>
    )
}


export const useStateContext = () => useContext(StateContext)