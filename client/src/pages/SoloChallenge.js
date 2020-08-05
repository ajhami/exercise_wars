import React, { Component } from 'react';
import AddWorkout from "../components/AddWorkout"
import ExerciseTable from "../components/ExerciseTable"
import Works from "../components/Works"

// import VideoContainer from "../components/VideoContainer"

class SoloChallenge extends Component {



  render() {
    return (
      <div class="card" style = {{ width: "55%"}}>
        <div class="card-body"></div>


        <h3> Minute Challenge</h3>
        <h4> Can You Move up a rank?</h4>

        <div className="row">



          < ExerciseTable />
          <AddWorkout />
          <Works />
        </div>

      </div>
      // </div >
    );
  };
};

export default SoloChallenge;