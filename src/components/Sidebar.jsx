import React from 'react' ; 
import SidebarOption from './SidebarOption';
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Button } from '@mui/material';


const Sidebar = () => {
  return (
    <div className='sidebar'>
        <TwitterIcon className='sidebar__twittericon'/>
        <SidebarOption active text='home' Icon={HomeIcon}/>
        <SidebarOption text='Notifications' Icon={NotificationsIcon}/>
        <SidebarOption text='Search' Icon={SearchIcon}/>
        <Button 
        className='sidebar__tweet'
        fullWidth
         variant='contained'>Tweet</Button>
    </div>
  )
}

export default Sidebar