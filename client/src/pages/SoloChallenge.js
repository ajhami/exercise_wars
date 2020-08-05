import React, { Component } from 'react';
import AddWorkout from "../components/AddWorkout"
import ExerciseTable from "../components/ExerciseTable"
import ChallengeForm from "../components/ChallengeForm"

// import VideoContainer from "../components/VideoContainer"

class SoloChallenge extends Component {



  render() {
    return (
      <div class="card" style={{ width: "90%" }}>
        <div class="card-body" id="soloChallengeCard">
          <h3> Minute Challenge</h3>
          <h4> Can You Move up a rank?</h4>

          {/* <div className="row"> */}

            < ExerciseTable />
            < AddWorkout />
          </div>

        </div>
      // </div >
    );
  };
};

export default SoloChallenge;