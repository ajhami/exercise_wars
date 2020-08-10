import React from 'react'
// import { Link } from 'react-router-dom'
import './style.css'
function Footer() {
    return (

        <div className="footer" style={{height : "120px" }}>
            <div className="row">
                <div className="col-sm">
                <img className="img" id="minute" src={process.env.PUBLIC_URL + "/assets/images/logo/exercise_wars_title.png"} alt="Card image cap" 
               style = {{height: "120px", marginLeft: "85px"}}>
                </img> 
                </div>
                <div className="col-sm" style = {{marginTop: "5px", marginLeft: "195px"}}>
                    <h5>Contact Exercise Wars:</h5>
                    <h6>Corporate Office</h6>
                    <h6>345 Exercise Ln.</h6>
                    <h6>Salt Lake City, Ut  84109</h6>
                </div>
                <div>

                        <h4>Email:</h4>
                    <div className="footerLinks">
                       <a href="mailto:hege@example.com">exercisewars@gmail.com</a>

                    </div>
                </div>
                <div>

                    <a href="https://secure.humanesociety.org/site/SPageServer?pagename=splash&s_src=ad_bing_nonbranded_donate%20to%20animals&msclkid=039581d32e1e185ab2f7dee3ae364709&utm_source=bing&utm_medium=cpc&utm_campaign=Non%20Branded%20-%20Animal%20Charities&utm_term=donate%20to%20animals&utm_content=Animal%20Charities%20-%20Donations" className="btn btn-secondary btn-lg" role="button" aria-disabled="true" style = {{marginTop: "25px"}}>Donate</a>

                </div>
            </div>
        </div>
    )
}

export default Footer