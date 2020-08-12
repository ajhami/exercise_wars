import React from 'react';
import ChallengeForm from "../ChallengeForm"
import ChallengeDropDown from "../ChallengeDropDown"
import NavBar from "../NavBar"
import Footer from "../Footer"
import "./style.css";

function SoloCard(props) {
    return (
        <div>
            < NavBar />

            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <div className="img">
                            <img className="img" src={process.env.PUBLIC_URL + "/assets/images/logo/celebrate2.png"} alt="Card cap" style={{ height: "495px", width: "100%", marginTop: "15px" }}                    >
                            </img>
                        </div>
                    </div>

                    <div className="card" style={{ display: "block", marginRight: "auto", border: "0px", marginLeft: "auto", height: "495px", backgroundColor: "grey", width: "25%", marginTop: "15px" }}>
                        <div className="col-sm" style={{ marginLeft: "auto", marginRight: "auto", marginBottom: "25px", marginTop: "15px" }} >
                           <h2 className = "cardheader"> {props.name}</h2>
                            <ChallengeForm />
                        </div>

                        <div className="img" >
                            <img className="img" src={props.imgsrc} alt="Card cap" style={{ width: "100%", height: "250px", marginBottom: "15px" }} >

                            </img>
                        </div>


                        <div className="drop-down" style={{ marginLeft: "auto", marginRight: "auto", marginBottom: "15px" }}       >
                            <h3 className= "h3dropdown">Complete</h3>
                            < ChallengeDropDown />
                        </div>

                    </div>

                    <div className="col-sm">
                        <div className="img">
                            <img className="img" src={process.env.PUBLIC_URL + "/assets/images/logo/celebrate3.png"} alt="Card cap" style={{ height: "495px", width: "100%", marginBottom: "10px", marginTop: "15px" }}                    >
                            </img>
                        </div>
                    </div>
                </div>
            </div>
            < Footer />

        </div>
    )
}

export default SoloCard