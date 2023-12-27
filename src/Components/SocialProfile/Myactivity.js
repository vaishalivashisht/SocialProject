import React, { useState } from 'react'
import postData from './Postdata';

const Myactivity = () => {

const[tab, setTab] = useState(1);

function activeTab(tabNumber){
  setTab(tabNumber); 
}

const activity = postData.filter((product) => product.item === "MyActivity Work");
const post = postData.filter((product) => product.item === "My Post Work");
const savepost = postData.filter((product) => product.item === "Saved Post Work");

const data = tab === 1 ? activity : tab === 2 ? post : tab === 3 ? savepost : null; 

  return (

    <>
    <div className='myActivity'>
      
       <div className='myactivity-details' onClick={() => activeTab(1)} style={{borderBottom: tab === 1 ? "5px solid yellow" : ""}}> My Activity </div>
       <div className='myactivity-details' onClick={() => activeTab(2)} style={{borderBottom: tab === 2 ? "5px solid yellow" : ""}}> My Post </div>
       <div className='myactivity-details' onClick={() => activeTab(3)} style={{borderBottom: tab === 3 ? "5px solid yellow" : ""}}> Saved Post </div>

    </div> 

<div className='showdata'>

{data && data.map((value) => {

console.log(value.item);

return(

<div className='info'>{value.item}</div>

) 
})} 

</div> 

</>
) 
} 

export default Myactivity; 
