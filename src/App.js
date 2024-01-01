
import './App.css';
import Post from './Components/Post/Post';
import Createpost from './Components/Createpost/Createpost';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Socialprofile from './Components/SocialProfile/Socialprofile'; 
import { useState, useContext } from 'react';

import { Tab,TabHeadsContainer,TabContentItem, TabContentContainer,TabItem} from './Components/Tabs/Tab'; 



function App() { 

const[currentTabIndex, setIndex] = useState(1); 

const handleChange = (newIndex) => {

  setIndex(newIndex);
}

  return ( 
    <div className="App"> 

        <Routes> 

        <Route exact path="/Post" element={<Post/>} />
        <Route path="/Createpost" element={<Createpost/>} />
        <Route path="/Socialprofile" element={<Socialprofile/>} />
       
        
        </Routes> 

      <Tab currentTab={currentTabIndex} onChange={handleChange}>

       <TabHeadsContainer> 
       <TabItem label ="Tab1" index={1} /> 
       <TabItem label ="Tab2" index={2} /> 
       <TabItem label ="Tab3" index={3} /> 
        
        </TabHeadsContainer>

        <TabHeadsContainer>

       <TabContentContainer>

       <TabContentItem index={1}>
        <h1> I am content 1 </h1>
        </TabContentItem>

        <TabContentItem index={2}>
        <h1> I am content 2 </h1>
        </TabContentItem>

        <TabContentItem index={3}>
        <h1> I am content 3 </h1>
        </TabContentItem>

       </TabContentContainer>

       </TabHeadsContainer>
      
       </Tab>
          
</div> 
); 
} 

export default App;
