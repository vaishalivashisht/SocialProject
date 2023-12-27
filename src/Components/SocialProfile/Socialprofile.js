import React from 'react';
import './Socialprofile.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import Myactivity from './Myactivity';
import Mypost from './Postdata';
import Savepost from './Savepost';

const Socialprofile = () => {
  return (
    <div className='socialBox'> 

    <h1> Social Profile </h1>

    <div className='listMainBox'>

    <div className='totalPost'>
    <p> <FontAwesomeIcon icon={faUser} /> Total Post </p>
    
    
    </div>
    <div className='totalPost'>
    <p> <FontAwesomeIcon icon={faUser} /> Total Post </p>
    
    
    </div>
    <div className='totalPost'>
    <p> <FontAwesomeIcon icon={faUser} /> Total Post </p>
    
    
    </div>
    <div className='totalPost'>
    <p> <FontAwesomeIcon icon={faUser} /> Total Post </p>
    
    
    </div>



    </div>

    <Myactivity/> 
      
    </div>
  )
}

export default Socialprofile
