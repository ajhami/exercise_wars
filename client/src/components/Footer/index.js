import React from 'react'
// import { Link } from 'react-router-dom'
import './style.css'
function Footer() {
    return (

        <div className="footer" style={{ border: "1px solid black" }}>
            <div className="row">
                <div className="col-sm">
                    
                </div>




                <div className="col-sm">
                    <h5>Contact Exercise Wars</h5>
                    <h6>Corporate Office</h6>
                    <h6>345 Exercise Ln.</h6>
                    <h6>Salt Lake City, Ut  84109</h6>

                </div>
                <div className="col-sm">

                    <div className="footerLinks">
                        <a href="mailto:hege@example.com">exercisewars@gmail.com</a><br></br>
                    </div>
                </div>

                <div className="col-sm">
                    <a href="https://secure.actblue.com/donate/biden2020_fr_web?refcode=web-homepage-nav" className="btn btn-secondary btn-lg" role="button" aria-disabled="true">Donate</a>
                </div>

            </div>
        </div>
    )
}

export default Footer