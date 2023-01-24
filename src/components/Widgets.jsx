import React from 'react'; 
import './../widgets.css' ;
import { 
  TwitterTimelineEmbed , 
  TwitterShareButton , 
  TwitterTweetEmbed 
} from "react-twitter-embed" ; 
import SearchIcon from '@mui/icons-material/Search';



const Widgets = () => {
  return (
    <div className='widgets'>
       <div className="widgets__input">
        <SearchIcon className='widgets__searchicon'/>
        <input type="text" placeholder='search twitter' />
       </div>
       <div className="widgets__widgetscontainer">
          <h2>what's happining</h2>
          <TwitterTweetEmbed 
          tweetId={"858551177860055040"} />

         <TwitterTimelineEmbed
          sourceType="profile"
          screenName="cleverqazi"
          options={{ height: 400 }}
        /> 
 <TwitterShareButton
          url={"https://facebook.com/cleverprogrammer"}
          options={{ text: "#reactjs is awesome", via: "cleverqazi" }}
        /> 
       </div>
    </div>
  )
}

export default Widgets