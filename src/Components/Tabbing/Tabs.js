import React from 'react' 
import { useContext } from 'react'; 
import { TabContext } from './Tabcontext'; 

const Tabs = () => {

    const tabContext = useContext(TabContext); 

    console.log(tabContext); 
    
  return (
    <div className='tabs'> 
    
    <button onClick={() => tabContext.settabs(tabContext.tabs)}> Tab 1 </button> 
    <button> Tab 2 </button> 
         
    </div>  
  ) 
  } 

export default Tabs; 

