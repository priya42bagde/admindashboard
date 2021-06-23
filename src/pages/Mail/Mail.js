import React from 'react'
import "./Mail.css"
import {Button} from "react-bootstrap";

function Mail() {
    return (
        <div style={{flex:4}} className="mail">
            <h1 >Mail Contact</h1>
            <br/>
            <div className="mailButton">
              <a href="mailto:xyz@gmail.com" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-danger" title="xyz@gmail.com">
                  <i className="fas fa-envelope-square"></i> Click here to email 
                </Button>
              </a>
            </div>
        </div>
    )
}

export default Mail
