import React from 'react'
import "./Feedback.css"

function Feedback() {
    return (
        <div style={{flex:4}} className="feedback">
           <h4 className="addfeedback">Feedback provide here : </h4>
            <form className="addfeedbackForm">
                <div className="addfeedbackItem">
                   <label>Name</label><br/>
                   <input type="text" placeholder="Apple Airpods" />
                </div>

                <div className="addfeedbackItem">
                   <label>Email</label><br/>
                   <input type="text" placeholder="123" />
                </div>

                <div className="addfeedbackItem">
                   <label>Feedback/Suggestions</label><br/>
                   <input type="text" placeholder="" />
                </div>
                <button className="addProductButton">Sent</button>
            </form>

        </div>
    )
}

export default Feedback
