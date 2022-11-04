import React from "react";
import "./Navbar.css";
import logo from "./logo";
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import SearchIcon from '@mui/icons-material/Search';
import ChatIcon from '@mui/icons-material/Chat';
import LogoutIcon from '@mui/icons-material/Logout';

function Navbar(){
    return(
        <nav style={{display:"flex",flexDirection:"row"}}>
            {logo}
            <HomeIcon/>
            <SettingsIcon/>
            <SearchIcon/>
            <ChatIcon/>
            <LogoutIcon/>
            {/* <div>Home</div>
            <div>Search</div>
            <div>Message</div>
            <div>Settings</div>
            <div>Logout</div> */}
            
        </nav>
    )
}

export default Navbar;