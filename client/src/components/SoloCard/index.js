import React, { Component } from 'react';
import ChallengeForm from "../ChallengeForm"
import ChallengeDropDown from "../ChallengeDropDown"
import NavBar from "../NavBar"
function SoloCard(props) {
    return (
        <div>
            < NavBar />

            <div className="card" style={{ height: "480px", backgroundColor: "aquamarine", width: "25%", border: "1px solid black", marginLeft:"15px" }}>
                <div className="row">
                    <div className="col-sm" style={{ marginLeft: "125px", marginBottom: "25px", marginTop: "15px" }} >
                        <h2> {props.name}</h2>
                        <h4></h4>
                        <ChallengeForm />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm" style={{ marginBottom: "25px", marginLeft: "15px" }}>
                        <div className="img" >
                            <img className="img" src={props.imgsrc} alt="Card image cap" >

                            </img>
                        </div>

                    </div>
                </div>
                <div className="row">

                    <div className="col-sm" style={{ marginLeft: "125px", marginBottom: "25px" }}       >
                        <h3>Succesful?</h3>
                        < ChallengeDropDown />
                    </div>
                </div>
            </div>



        </div>
    )
}

export default SoloCard