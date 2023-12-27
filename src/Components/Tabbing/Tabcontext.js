import { createContext, useState} from "react";

export const TabContext = createContext();

export const TabsProvider = (props) => {

const [tabs, settabs] = useState();  

    return( 

        <TabContext.Provider value={{tabs, settabs}}>{props.children}</TabContext.Provider> 
    ) 
} 