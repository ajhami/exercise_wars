import React, { Component } from 'react';
import ChallengeForm from "../components/ChallengeForm"
import VideoContainer from "../components/VideoContainer"
import ChallengeDropDown from "../components/ChallengeDropDown"
import Footer from "../components/Footer"
class PushUps extends Component {

    render() {
        return (

            <div className="card" style={{ height: "530px", backgroundColor: "aquamarine", width: "25%", border: "1px solid black" }}>
                <div className="row">
                    <div class="col-sm" style={{ marginLeft: "30%", marginBottom: "25px", marginTop: "15px" }} >
                        <h2> Pushups</h2>
                        <h4>Desired Goal</h4>
                        <ChallengeForm />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm" style={{ marginBottom: "25px", marginLeft:"10%" }}>
                        <VideoContainer />
                    </div>
                </div>
                <div className="row">

                    <div className="col-sm" style={{ marginLeft: "30%", marginBottom: "25px" }}       >
                        <h3>Succesful?</h3>
                        < ChallengeDropDown />
                    </div>
                </div>

                < Footer />
            </div>
        );
    };
};

export default PushUps