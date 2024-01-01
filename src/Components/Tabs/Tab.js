import { createContext, useContext } from "react";
import "./Tab.css";

const TabContext = createContext();

export function Tab({ currentTab, onChange, children}){
return(
<div className="tab">
<TabContext.Provider value={{currentTab, onChange}}>{children}</TabContext.Provider>
</div>
)
}

export const TabHeadsContainer = ({children}) => {
return(<div className="headsConteiner">{children}</div>)
};

export const  TabItem = ({label, index, children}) => {

const {currentTab, onChange} = useContext(TabContext);

const handleClick = () =>{
    onChange(index); 

}

return(<div className={`item ${currentTab === index ? "active" : null}`} onClick={handleClick}>{label}</div>)
 }; 

 export const  TabContentContainer = ({children}) => {
return(

<div className="contentContainer">{children}</div>
)
};

export const TabContentItem = ({index, children}) => {
 const {currentTab} = useContext(TabContext);

 return (
    <div>{currentTab === index ? <div>{children}</div> : null}</div>
 )
 };