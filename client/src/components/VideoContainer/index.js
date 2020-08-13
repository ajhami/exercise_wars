import React from 'react'
//import { Link } from 'react-router-dom'
import './style.css'

function VideoContainer() {
    return (
        <div className="img" >
            <img className="img" src={process.env.PUBLIC_URL + "/assets/images/logo/pushup.png"} alt="Card image cap" >
            </img>
        </div> 
    );
}

export default VideoContainer