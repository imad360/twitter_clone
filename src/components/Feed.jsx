import React, { useEffect, useState } from 'react';
import './../feed.css';
import Post from './Post';
import Tweetbox from './Tweetbox';
import { doc, collection, query, onSnapshot } from "firebase/firestore";
import db from './../firebase'; 
// import { doc, getDoc } from "firebase/firestore";


const Feed = () => {
  const [posts, setPosts] = useState([]) ; 
 
  useEffect(() => {
    const q = query(collection(db, "posts"))
    const unsub = onSnapshot(q, (querySnapshot) => {
      setPosts(querySnapshot.docs.map(d => d.data()));
      console.log(posts)
    });
  }, [])
  


  return (
    <div className='feed'>
        <div className="feed__header">
            <h2>Home</h2>
        </div>
        <Tweetbox/>
        {
          posts.map(post =>(
            <Post 
            displayName={post.displayName} 
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
            />
          ) )
        }
    </div>
  )
}

export default Feed