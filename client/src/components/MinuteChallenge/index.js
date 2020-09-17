import React from 'react'

import './style.css'

function MinuteChallenge() {
    return (

        <div className="card" style={{ height: "470px", width: "100%" }}>
            <div className="img">
                <img className="img" id="minute" src={process.env.PUBLIC_URL + "/assets/images/logo/pushup.png"} alt="pushups" >
                </img>
                <a href="/SoloChallenge" className="btn btn-primary btn-lg active" role="button" aria-pressed="true" style = {{marginTop: "45px", marginLeft: "23%",backgroundColor: "#343A40", border: "none"}}>Minute Challenge</a>
            </div>
        </div>
    )
}

export default MinuteChallenge