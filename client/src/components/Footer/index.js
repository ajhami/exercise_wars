import React from 'react'
import './style.css'
function Footer() {
    return (

        <div className="footer" style={{  backgroundColor:"grey"}}>
            <div className="row">
               
                <div className="col-sm" style = {{width: "60%"}}>
                    <img className="img" id="minute" src={process.env.PUBLIC_URL + "/assets/images/logo/exercise_wars_title.png"} alt="Card cap"
                        style={{ height: "140px", marginLeft: "35%" }}>
                    </img>
                </div>

                <div className="col-sm">
                    <div className="info" style={{ marginLeft: "5%", width: "75%", marginBottom: "15px" }}>
                        <h5>Contact:</h5>
                        <p>Corporate Office</p>
                        <p>345 Exercise Ln.</p>
                        <p>Salt Lake City, Ut  84109</p>
                    </div>
                </div>


                <div className="col-sm" >
                    <div className="email" style={{ marginTop: "5px", marginLeft: "", width: "100%", marginRight:"15%"}}>
                        <h5 className="emailheader">Email:</h5>
                        <div className="link" style = {{fontSize: "25px", marginLeft: "25%" }}>
                        <a className="emailanchor" href="mailto:hege@example.com">ewars@gmail.com</a>
                        </div>
                    </div>
                </div>

                <div className="col-sm">

                    <a href="https://www.theroadhome.org/give/in-kind-donations/" className="btn btn-secondary btn-lg active" role="button" aria-pressed="true" style = {{marginTop: "25px", marginLeft:"30%", marginBottom: "15px" , backgroundColor: "#333333"}}>Donate</a>

                </div>


            </div>
        </div>
    )
}

export default Footer