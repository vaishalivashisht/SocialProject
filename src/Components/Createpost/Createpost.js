import React from 'react';
import './Createpost.css';
import Button from './Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faPlus } from '@fortawesome/free-solid-svg-icons'

const Createpost = () => {
  return (
    <div className='postBox'> 

    <div className='iconList'>
    <div className='headingCreate'> <h1> Create a Post  </h1>
</div> 

  <div className='closeIcon'>

  <FontAwesomeIcon icon={faXmark} />

  </div>
   
  </div>
   

    <div className='form'>

    <label>
      Share Your Journey <br/>
      <textarea name="postContent" rows={4} cols={40} placeholder='Type about your day, flying sessions, project completed'/>
    </label>

    </div>

    <div className='uploadBox'>

   <h3> Upload assets </h3>

   <p> <FontAwesomeIcon icon={faPlus} /> </p>  <p> <FontAwesomeIcon icon={faPlus} /> </p>
   </div>
   
  <Button/>

      
   </div>
  )
}

export default Createpost; 
