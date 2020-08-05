import React, { Component } from 'react';
// import API from "../utils/API";
import AddWorkout from "../components/AddWorkout"
// import VideoContainer from "../components/VideoContainer"
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

class SoloChallenge extends Component {

  
    render() {
      return (
        <div>
          <NavBar />
          <h1> Create a Workout</h1>
          <AddWorkout />
          <Footer />
        </div>
  
      );
    };
  };

export default SoloChallenge;