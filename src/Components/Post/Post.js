import React from 'react'
import './Post.css';
import Header from './Header';
import Carousel from './Carousel';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudArrowUp, faThumbsUp } from '@fortawesome/free-solid-svg-icons'

const Post = () => {
  return (

    <>
    <div className='flex-grid'> 

    <Header/>
   
    <p> "Lorem Ipsum is simply dummy text of the printing and typesetting" <span> #hashteg1 #hashteg2 </span> </p>

    <Carousel/>

    <div className='social-box'>

    <div className='like-btn'> <FontAwesomeIcon icon={faThumbsUp}/><span> 20 </span> </div>
        
    <FontAwesomeIcon icon={faThumbsUp}/><span> 20 </span>

    </div>
    

       
    </div> 
    </>
)
}

export default Post
