import React from 'react'
// import { Link } from 'react-router-dom'
import './style.css'
function Footer() {
    return (

        <div className="footer" style={{ height: "120px", backgroundColor:"grey"}}>
            <div className="row">
                <div className="col-sm">
                    <img className="img" id="minute" src={process.env.PUBLIC_URL + "/assets/images/logo/exercise_wars_title.png"} alt="Card image cap"
                        style={{ height: "120px", marginLeft: "85px" }}>
                    </img>
                </div>

                <div className="col-sm" style={{ marginTop: "5px", marginLeft: "75px" }}>
                    <div className="info" style={{ marginLeft: "125px" }}>
                        <h5>Contact Exercise Wars:</h5>
                        <h6>Corporate Office</h6>
                        <h6>345 Exercise Ln.</h6>
                        <h6>Salt Lake City, Ut  84109</h6>
                    </div>
                </div>


                <div className="col-sm">
                    <div className="email" style={{ marginTop: "5px", marginLeft: "65px"}}>
                        <h5>Email:</h5>
                        <div className="link" style = {{fontSize: "25px"}}>
                        <a href="mailto:hege@example.com">exercisewars@gmail.com</a>
                        </div>
                    </div>
                </div>

                <div className="col-sm">

                    <a href="#" class="btn btn-secondary btn-lg active" role="button" aria-pressed="true" style = {{marginTop: "25px"}}>Donate</a>
                </div>


            </div>
        </div>
    )
}

export default Footer