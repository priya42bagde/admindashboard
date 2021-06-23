import { Visibility } from '@material-ui/icons'
import React from 'react'
import "./WidgetSmall.css"

function WidgetSmall() {
    return (
        <div className="WidgetSmall">
            <span className="WidgetSmallTitle"> New Join Members</span>
            <ul className="WidgetSmallList">
                <li className="WidgetSmallListItem">
                    <img src="./images/userA.JPG" alt="" className="WidgetSmallImg" />
                    <div className="WidgetSmallUser">
                        <span className="WidgetSmallUserName">Anna Kellen</span>
                        <span className="WidgetSmallUserTitle">Software Developer</span>
                    </div>
                    <button className="WidgetSmallButton">
                        <Visibility className="WidgetSmallIcon"/> Display
                    </button>
                </li>

                <li className="WidgetSmallListItem">
                    <img src="./images/userB.JPG" alt="" className="WidgetSmallImg" />
                    <div className="WidgetSmallUser">
                        <span className="WidgetSmallUserName">Anna Kellen</span>
                        <span className="WidgetSmallUserTitle">Software Developer</span>
                    </div>
                    <button className="WidgetSmallButton">
                        <Visibility className="WidgetSmallIcon"/> Display
                    </button>
                </li>

                <li className="WidgetSmallListItem">
                    <img src="./images/userC.JPG" alt="" className="WidgetSmallImg" />
                    <div className="WidgetSmallUser">
                        <span className="WidgetSmallUserName">Anna Kellen</span>
                        <span className="WidgetSmallUserTitle">Software Developer</span>
                    </div>
                    <button className="WidgetSmallButton">
                        <Visibility className="WidgetSmallIcon"/> Display
                    </button>
                </li>

                <li className="WidgetSmallListItem">
                    <img src="./images/userD.JPG" alt="" className="WidgetSmallImg" />
                    <div className="WidgetSmallUser">
                        <span className="WidgetSmallUserName">Anna Kellen</span>
                        <span className="WidgetSmallUserTitle">Software Developer</span>
                    </div>
                    <button className="WidgetSmallButton">
                        <Visibility className="WidgetSmallIcon"/> Display
                    </button>
                </li>

                <li className="WidgetSmallListItem">
                    <img src="./images/userE.JPG" alt="" className="WidgetSmallImg" />
                    <div className="WidgetSmallUser">
                        <span className="WidgetSmallUserName">Anna Kellen</span>
                        <span className="WidgetSmallUserTitle">Software Developer</span>
                    </div>
                    <button className="WidgetSmallButton">
                        <Visibility className="WidgetSmallIcon"/> Display
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default WidgetSmall
