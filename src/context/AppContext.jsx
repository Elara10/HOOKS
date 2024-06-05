import {createContext} from 'react'

export const AppContext=createContext();

const ContextProvider=(props)=>{
    const phone="+91 3752755224"
    const name="GreatStack"
    return(
        <AppContext.Provider value={{phone,name}}>
            {props.children}
        </AppContext.Provider>
    )
}
export default ContextProvider