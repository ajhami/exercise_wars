import React from 'react'

import './style.css'

function MinuteChallenge() {
    return (
        <div className="card" style={{ height: "450px", backgroundColor: "aquamarine", width: "25%", border: "5px solid black" }}>
            <div className="img">
                <img className="img" id="minute" src={process.env.PUBLIC_URL + "/assets/images/logo/pushup.png"} alt="Card image cap" >
                </img>
                <a href="/SoloChallenge" class="btn btn-primary btn-lg active" role="button" aria-pressed="true" style = {{marginTop: "15px", marginLeft: "25%", marginBottom: "15px"}}>Minute Challenge</a>
                <p>Set a goal and challenge yourself for a minute</p>
            </div>
        </div>
    )
}

export default MinuteChallenge