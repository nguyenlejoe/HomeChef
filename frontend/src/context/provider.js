import React, {useReducer, createContext} from 'react';
import{reducer, initialState} from './reducer';

export const AppContext = createContext(initialState);



const AppProvider = ({children})=>{

    const[state, dispatch] = useReducer(reducer, initialState);

    return(
        <AppContext.Provider value={{state,dispatch}}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider;