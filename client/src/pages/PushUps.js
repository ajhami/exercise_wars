import React, { Component } from 'react';
// import API from "../utils/API";
import ChallengeForm from "../components/ChallengeForm"
import VideoContainer from "../components/VideoContainer"
import ChallengeDropDown from "../components/ChallengeDropDown"
class PushUps extends Component {


    render() {
        return (

            <div className="card">
                <h3> Pushup Challenge</h3>
                <div className="row">
                    <div class="col-sm">
                        <ChallengeForm />
                    </div>
                    <div className="col-sm">
                        <VideoContainer />
                    </div>
                    <div className="col-sm">
                      <h3>Succesful?</h3>  
                        < ChallengeDropDown />
                     </div>
                </div>
            </div>
        
        );
    };
};

export default PushUps