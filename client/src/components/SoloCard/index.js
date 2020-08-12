import React, { Component } from 'react';
import ChallengeForm from "../ChallengeForm"
import ChallengeDropDown from "../ChallengeDropDown"
import NavBar from "../NavBar"
import Footer from "../Footer"
import "./style.css";

function SoloCard(props) {
    return (
        <div>
            < NavBar />

            <div className="row">
                <div className="col-sm">
                    <div className="img">
                        <img className="img" src={process.env.PUBLIC_URL + "/assets/images/logo/celebrate2.png"} alt="Card image cap" style={{ height: "480px", width: "90%", marginLeft: "15px", marginTop: "15px" }}                    >
                        </img>
                    </div>
                </div>
                <div className="card" style={{ height: "480px", backgroundColor: "grey", width: "25%", border: "1px solid black", marginRight: "40px", marginBottom: "35px" }}>
                    <div className="col-sm" style={{ marginLeft: "125px", marginBottom: "25px", marginTop: "15px" }} >
                        <h2> {props.name}</h2>
                        <h4></h4>
                        <ChallengeForm />
                    </div>
                   
                    <div className="col-sm" style={{ marginBottom: "95px", marginLeft: "11%" }}>
                        <div className="img" >
                            <img className="img" src={props.imgsrc} alt="Card image cap" >

                            </img>
                        </div>

                    </div>
                   

                    <div className="col-sm" style={{ marginLeft: "125px", marginTop: "15px" }}       >
                        <h3>Succesful?</h3>
                        < ChallengeDropDown />
                    </div>
                </div>
                <div className="col-sm">
                    <div className="col-sm">
                        <div className="img">
                            <img className="img" src={process.env.PUBLIC_URL + "/assets/images/logo/celebrate3.png"} alt="Card image cap" style={{ height: "480px", width: "100%", marginBottom: "15px", marginTop: "15px" }}                    >
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