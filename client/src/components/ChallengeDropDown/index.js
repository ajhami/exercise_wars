import React from 'react'
//import { Link } from 'react-router-dom'
import './style.css'
function ChallengeDropDown() {
    return (
        <div className= "row" style = {{width:"100%", margin:"auto"}}>
            <button type="button" className="btn btn-primary" style = {{marginRight: "auto", marginLeft: "auto", backgroundColor:"#333333", textAlign:"center", display:"inline-block"}}>Yes</button>
            <button type="button" className="btn btn-secondary" style = {{marginRight: "auto", marginLeft: "auto", backgroundColor:"#ae0f19",textAlign:"center", display: "block"}}>No</button>
        </div>
    )
};

export default ChallengeDropDown