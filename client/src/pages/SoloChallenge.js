import React, { Component } from 'react';
// import API from "../utils/API";
import AddWorkout from "../components/AddWorkout"
import VideoContainer from "../components/VideoContainer"

class SoloChallenge extends Component {

  
  
    render() {
      return (
        <div><h1> Create a Workout</h1>
          <AddWorkout />
        </div>
  
      );
    };
  };

export default SoloChallenge;