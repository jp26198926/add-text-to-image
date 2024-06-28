import { createContext, useReducer } from "react";
import { initialState, appReducer  } from "./AppReducer";

const AppContext = createContext();

const AppContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(appReducer, initialState);

    return (
        <AppContext.Provider value={{state, dispatch}}>
            {children}
        </AppContext.Provider>
    )
}

export {AppContext, AppContextProvider}