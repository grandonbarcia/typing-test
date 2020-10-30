import React, { useReducer } from 'react'
import { initState, InputReducer } from './reducer'

const InputStateContext = React.createContext();
const InputDispatchContext = React.createContext();

export const useInputState = () => {
    const context = React.useContext(InputStateContext);
    if (context === undefined) throw new Error('useInputeState must used within a InputStateProvider')
    return context;
}

export const useInputDispatch = () => {
    const context = React.useContext(InputDispatchContext)
    if (context === undefined) throw new Error("useInputDispatch must be used within a InputProvider")
    return context;
}

export const InputProvider = ({ children }) => {
    const [input, dispatch] = useReducer(InputReducer, initState);
    return (
        <InputStateContext.Provider value={input}>
            <InputDispatchContext.Provider value={dispatch}>
                {children}
            </InputDispatchContext.Provider>
        </InputStateContext.Provider>
    )
}