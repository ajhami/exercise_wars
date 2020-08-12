import React from 'react'
//import { Link } from 'react-router-dom'
import './style.css'
function ChallengeDropDown() {
    return (
        <div>
            <button type="button" className="btn btn-primary" style = {{marginRight: "15px", backgroundColor:"#333333"}}>Yes</button>
            <button type="button" className="btn btn-secondary" style = {{backgroundColor:"#ae0f19"}}>No</button>
        </div>
    )
};

export default ChallengeDropDown