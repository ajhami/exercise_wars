import React, { Component } from 'react';
import ChallengeForm from "../ChallengeForm"
import ChallengeDropDown from "../ChallengeDropDown"

function SoloCard(props) {
    return (
        <div className="card" style={{ height: "530px", backgroundColor: "aquamarine", width: "25%", border: "1px solid black" }}>
            <div className="row">
                <div className="col-sm" style={{ marginLeft: "30%", marginBottom: "25px", marginTop: "15px" }} >
                    <h2> {props.name}</h2>
                    <h4>Desired Goal</h4>
                    <ChallengeForm />
                </div>
            </div>
            <div className="row">
                <div className="col-sm" style={{ marginBottom: "25px", marginLeft: "10%" }}>
                    <div className="img" >
                        <img className="img" src={props.imgsrc} alt="Card image cap" >

                        </img>
                    </div>

                </div>
            </div>
            <div className="row">

                <div className="col-sm" style={{ marginLeft: "30%", marginBottom: "25px" }}       >
                    <h3>Succesful?</h3>
                    < ChallengeDropDown />
                </div>
            </div>

        </div>
    )
}

export default SoloCard