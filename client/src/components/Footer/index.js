import React from 'react'
// import { Link } from 'react-router-dom'
import './style.css'
function Footer() {
    return (

        <div className="footer" style={{ border: "1px solid black" }}>
            <div className="row">
                <div className="col-sm">
                    <img className="welcome_navbrand_img" src={process.env.PUBLIC_URL + "/assets/images/logo/apple-touch-icon.png"} alt="EW icon"
                        style={{ width: "100px", height: "100px", marginLeft: "35px" }} />
                </div>




                <div className="col-sm">
                    <h5>Contact Exercise Wars</h5>
                    <h6>Corporate Office</h6>
                    <h6>345 Exercise Ln.</h6>
                    <h6>Salt Lake City, Ut  84109</h6>
                </div>

                <div className="col-sm">
                    <div className="footer">
                        <p>Email:</p>
                        <div className="footerLinks">
                            <a href="mailto:hege@example.com">exercisewars@gmail.com</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm">
                    <a href="https://secure.humanesociety.org/site/SPageServer?pagename=splash&s_src=ad_bing_nonbranded_donate%20to%20animals&msclkid=89e8385453cc1d3227a6676467517204&utm_source=bing&utm_medium=cpc&utm_campaign=Non%20Branded%20-%20Animal%20Charities&utm_term=donate%20to%20animals&utm_content=Animal%20Charities%20-%20Donations" className="btn btn-secondary btn-lg" role="button" aria-disabled="true" style={{ marginTop: "30px", marginLeft: "75px" }}>Donate</a>
                </div>
            </div>
        </div>
    )
}

export default Footer