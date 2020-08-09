import React, { Component } from 'react';
import AddWorkout from "../components/AddWorkout"
import ExerciseTable from "../components/ExerciseTable"

// import VideoContainer from "../components/VideoContainer"
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

class SoloChallenge extends Component {

  render() {
    return (
      <div>
      <NavBar />


      <div className="container" style={{ marginBottom: "25px", border: "1px solid black", maxWidth: "355px" }}>
        <div className="row" style={{ border: "1px solid black" }}>
          <div className="img" style={{ height: "250px", width: "100%" }} >
            <img className="img soloImage" src={process.env.PUBLIC_URL + "/assets/images/logo/second_pushup.jpg"} alt="Card image cap" >
            </img>
          </div>
          <div className="row">
            <div className="challenge" style={{ marginLeft: "20%" }}>
              <h3> Minute Challenge</h3>
              <h6> Choose a Minute Challenge</h6>
            </div>
            <div className="table">
              < ExerciseTable />
            </div>
          </div>

          <div className="row" >
            <div className="addWorkOut" style={{ backgroundColor: "red", border: "2px solid black", width: "100%" }}>
              <AddWorkout />
            </div>
          </div>

          <div className="row">
            <div className="img" style={{ height: "250px", marginBottom: "10px", width: "100%" }}>
              <img className="img soloImage" src={process.env.PUBLIC_URL + "/assets/images/logo/pullups.png"} alt="Card image cap" >
              </img>
            </div>
          </div>
        </div >
      </div>
      <Footer />
      </div>
    );
  };
};

export default SoloChallenge;