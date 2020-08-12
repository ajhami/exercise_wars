import React from 'react'

import './style.css'

function MinuteChallenge() {
    return (
        <div className="card" style={{ height: "450px", backgroundColor: "grey", width: "25%" }}>
            <div className="img">
                <img className="img" id="minute" src={process.env.PUBLIC_URL + "/assets/images/logo/pushup.png"} alt="Card image cap" >
                </img>

                <a href="/SoloChallenge" className="btn btn-primary btn-lg active" role="button" aria-pressed="true" style = {{marginTop: "25px",backgroundColor:'red', marginLeft: "23%"}}>Minute Challenge</a>
            </div>
        </div>
    )
}

export default MinuteChallenge