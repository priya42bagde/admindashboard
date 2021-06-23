import "./NewUser.css"

import React from 'react'

function NewUser() {
    return (
        <div className="newUser">
            <h1 className="newUserTitle">New User</h1>
            <form className="newUserForm">
                <div className="newUserItem">
                   <label>Username</label>
                   <input type="text" placeholder="Jon" />
                </div>

                <div className="newUserItem">
                   <label>Full Name</label>
                   <input type="text" placeholder="Jon Jacky" />
                </div>

                <div className="newUserItem">
                   <label>Email</label>
                   <input type="email" placeholder="Jon@gmail.com" />
                </div>

                <div className="newUserItem">
                   <label>Password</label>
                   <input type="password" placeholder="password" />
                </div>

                <div className="newUserItem">
                   <label>Phone</label>
                   <input type="text" placeholder="+1 234 567 89" />
                </div>

                <div className="newUserItem">
                   <label>Address</label>
                   <input type="text" placeholder="New York, USA" />
                </div>

                <div className="newUserItem">
                  <div className="newUserGender">
                   <label>Gender</label>
                   <input type="radio" name="gender" id="male" value="male" />
                   <label for="male">Male</label>
                   <input type="radio" name="gender" id="female" value="female" />
                   <label for="female">Female</label>
                   <input type="radio" name="gender" id="other" value="other" />
                   <label for="other">Other</label>
                   </div>
                </div>

                <div className="newUserItem">
                    <label>Active</label>
                    <select className="newUserSelect" name="active" id="active">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <button className="newUserButton">Create</button>
            </form>
        </div>
    )
}

export default NewUser
