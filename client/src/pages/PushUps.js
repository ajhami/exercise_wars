import React, { Component } from 'react';
// import API from "../utils/API";
import ChallengeForm from "../components/ChallengeForm"
import VideoContainer from "../components/VideoContainer"
import ChallengeDropDown from "../components/ChallengeDropDown"

class PushUps extends Component {

    render() {
        return (

            <div className="card" style={{ height: "500px", backgroundColor: "aquamarine", width: "25%" }}>
                {/* <div className="row"> */}
                <div class="col-sm" style={{ marginLeft: "8%", marginBottom: "0px", marginTop: "15px" }} >
                    <div className="soloChallenge">
                        <h3> Pushups </h3>
                    </div>
                    <ChallengeForm />
                </div>
                <div className="col-sm" style={{ marginBottom: "25px" }}>
                    <VideoContainer />
                </div>
                <div className="col-sm" style={{ marginLeft: "25%", marginBottom: "15px" }}       >
                    <h3>Succesful?</h3>
                    < ChallengeDropDown />
                </div>
                {/* </div> */}
            </div>
        );
    };
};

export default PushUps