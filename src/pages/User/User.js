import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import "./User.css"
function User() {
    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="">Edit User</h1>
                <Link to="/newUser">
                    <button className="userAddButton"> Create</button>
                </Link>
            </div>

            <div className="userContainer">
                <div className="userShow">

                    <div className="userShowTop">
                        <img src="/images/userA.JPG" alt="img" className="userShowImg" />
                    </div>
                    <div className="userShowTopTitle">
                        <span className="userShowUsername">Anna Baker</span>
                        <span className="userShowUsertitle">Software Enggineer</span>
                    </div>

                    <div className="userShowBotton">

                        <span className="userShowTitle">Account Details</span>
                        <div className="userShowInfo">
                            <PermIdentity className="userShowIcon" />
                            <span className="userShowInfoTitle">annabak99</span>
                        </div>
                        <div className="userShowInfo">
                            <CalendarToday className="userShowIcon" />
                            <span className="userShowInfoTitle">10.12.1999</span>
                        </div>

                        <span className="userShowTitle">Contact Details</span>
                        <div className="userShowInfo">
                            <PhoneAndroid className="userShowIcon" />
                            <span className="userShowInfoTitle">+1 234 567 89</span>
                        </div>
                        <div className="userShowInfo">
                            <MailOutline className="userShowIcon" />
                            <span className="userShowInfoTitle">annabak99@gmail.com</span>
                        </div>
                        <div className="userShowInfo">
                            <LocationSearching className="userShowIcon" />
                            <span className="userShowInfoTitle">New York, USA </span>
                        </div>

                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">

                            <div className="userUpdateItem">
                                <label>Username</label>
                                <input type="text" placeholder="annabak99" className="userUpdateInput" />
                            </div>

                            <div className="userUpdateItem">
                                <label>Full Name</label>
                                <input type="text" placeholder="Anna Baker" className="userUpdateInput" />
                            </div>

                            <div className="userUpdateItem">
                                <label>Email</label>
                                <input type="text" placeholder="annabak99@gmail.com" className="userUpdateInput" />
                            </div>

                            <div className="userUpdateItem">
                                <label>Phone</label>
                                <input type="text" placeholder="+1 234 567 89" className="userUpdateInput" />
                            </div>

                            <div className="userUpdateItem">
                                <label>Address</label>
                                <input type="text" placeholder="New York, USA" className="userUpdateInput" />
                            </div>

                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img src="/images/userA.JPG" alt="" className="userUpdateImg" />
                                <label htmlFor="file"><Publish className="userUpdateIcon" /></label>
                                <input type="file" id="file" style={{ display: 'none' }} />
                            </div>
                            <button className="userUpdateButton">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default User
