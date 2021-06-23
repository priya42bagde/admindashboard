import React from 'react'
import "./Topbar.css"
//import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
//import LanguageIcon from '@material-ui/icons/Language';
//import {NotificationsNoneIcon} from '@material-ui/icons';
//import SettingsIcon from '@material-ui/icons/Settings';
import {NotificationsNone,Language, Settings} from '@material-ui/icons';

function Topbar() {
    //logout() {
        //this.props.history.push("/logout");
       //}
        
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span style={{display:"flex", alignItems:"center" }} className="logo">Admin Dashboard</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                       <NotificationsNone />
                       <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                       <Language />
                       <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                       <Settings />
                    </div>

                    

                    <img  src="./images/Avatar.JPG" alt="profilePhoto" className="topAvatar"/>
                
                    <div className="topbarIconContainer">
                   {/* <button style={{padding:"10px", margin:"10px"}}>Log Out</button>*/}
                    </div>
                
                </div>
            </div>
        </div>
    )
}

export default Topbar

