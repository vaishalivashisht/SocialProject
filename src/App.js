
import './App.css';
import Post from './Components/Post/Post';
import Createpost from './Components/Createpost/Createpost';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Socialprofile from './Components/SocialProfile/Socialprofile'; 
import Tabs from './Components/Tabbing/Tabs';
import { useContext } from 'react'; 
import { TabContext } from './Components/Tabbing/Tabcontext';

function App() { 

const tabsState = useContext(TabContext);
console.log("Context", tabsState);

  return ( 
    <div className="App"> 

        <Routes> 

        <Route exact path="/Post" element={<Post/>} />
        <Route path="/Createpost" element={<Createpost/>} />
        <Route path="/Socialprofile" element={<Socialprofile/>} />
        
        </Routes> 

        <Tabs/> 

     
</div> 
); 
} 

export default App;
