import React from 'react';
import { Avatar  , Button } from '@mui/material';
import './../tweetbox.css' ; 



const Tweetbox = () => {
  return (
    <div className='tweetbox'>
        <form >
            <div  className='tweetbox__input'>
                <Avatar/>
                <input type="text" placeholder='what s happining ' />
            </div>
            <input
            className='tweetbox__imageinput'
            type="text" placeholder='enter images url' />
            <Button className='tweetbox__tweetbutton'>Tweet</Button>
        </form>
    </div>
  )
}

export default Tweetbox