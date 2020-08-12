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
                <div class="col-sm">
                    <div className="img">
                        <img className="img" src={process.env.PUBLIC_URL + "/assets/images/logo/celebrate2.png"} alt="Card image cap" style={{ height: "495px", width: "90%", marginTop: "15px" }}                    >
                        </img>
                    </div>
                </div>

                <div className="card" style={{ height: "495px", backgroundColor: "grey", width: "25%", border: "1px solid black", marginRight: "40px", marginBottom: "" }}>
                    <div className="col-sm" style={{ marginLeft: "35%", marginBottom: "25px", marginTop: "15px" }} >
                        <h2> {props.name}</h2>
                        <ChallengeForm />
                    </div>
                   
                        <div className="img" >
                            <img className="img" src={props.imgsrc} alt="Card image cap" style = {{width:"100%", height:"250px", marginBottom: "10%"}} >

                            </img>
                        </div>
                   

                    <div className="dropdown" style={{ marginLeft: "35%", marginBottom: "7%" }}       >
                        <h3>Succesful?</h3>
                        < ChallengeDropDown />
                    </div>

                </div>
                    <div class="col-sm">
                        <div className="img">
                            <img className="img" src={process.env.PUBLIC_URL + "/assets/images/logo/celebrate3.png"} alt="Card image cap" style={{ height: "495px", width: "100%", marginBottom: "px", marginTop:"4%" }}                    >
                            </img>
                        </div>
                    </div>
            </div>
            < Footer />

        </div>
    )
}

export default SoloCard