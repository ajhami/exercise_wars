import React from 'react'
// import { Link } from 'react-router-dom'
import './style.css'
function Footer() {
    return (

        <div className="footer" style={{ height: "auto", backgroundColor:"grey"}}>
            <div className="row">
               
                <div className="col-sm" style = {{width: "60%"}}>
                    <img className="img" id="minute" src={process.env.PUBLIC_URL + "/assets/images/logo/exercise_wars_title.png"} alt="Card image cap"
                        style={{ height: "140px", marginLeft: "95px" }}>
                    </img>
                </div>

                <div className="col-sm" style={{ marginTop: "5px"}}>
                    <div className="info" style={{ marginLeft: "125px", width: "45%", marginBottom: "15px" }}>
                        <h6>Contact:</h6>
                        <h7>Corporate Office</h7>
                        <h7>345 Exercise Ln.</h7>
                        <h7>Salt Lake City, Ut  84109</h7>
                    </div>
                </div>


                <div className="col-sm" >
                    <div className="email" style={{ marginTop: "5px", marginLeft: "90px", width: "80%"}}>
                        <h5>Email:</h5>
                        <div className="link" style = {{fontSize: "25px"}}>
                        <a href="mailto:hege@example.com">exercisewars@gmail.com</a>
                        </div>
                    </div>
                </div>

                <div className="col-sm" style = {{}}>

                    <a href="https://www.theroadhome.org/give/in-kind-donations/" class="btn btn-secondary btn-lg active" role="button" aria-pressed="true" style = {{marginTop: "25px", marginLeft:"125px"}}>Donate</a>
                </div>


            </div>
        </div>
    )
}

export default Footer