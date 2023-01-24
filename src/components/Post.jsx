import { Avatar } from '@mui/material'
import React from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';
import './../post.css'

const Post = ({
    displayName , 
    username , 
    verified , 
    text , 
    image , 
    avater 
}) => {
  return (
    <div className='post'>
        <div className="post__avatar">
         <Avatar/>
        </div>
        <div className="post__body">
            <div className="psot__header">
                <div className="post__headertext">
                    <h3>
                        imad oissafe
                        <span>
                            <CheckCircleIcon className='post__badge'/>
                        </span>
                    </h3>
                </div>
                <div className="post__headerdescription">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem eius, ex perferendis earum libero sequi cumque magnam cupiditate distinctio labore.</p>
                </div>
            </div>
            <img src="https://imgs.search.brave.com/HcQcBBrktyB9ANiq3xMhdkneGgSVlIGMG3jYYymfTvM/rs:fit:355:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC4y/Yko5X2Y5YUtvR0NN/RTdaSWZmLVp3SGFK/NCZwaWQ9QXBp" alt="images content" />
            <div className="post__footer">
            <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" />
            <PublishIcon fontSize="small" />
            </div>
        </div>
    </div>
  )
}

export default Post