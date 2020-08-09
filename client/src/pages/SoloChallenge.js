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
  <NavBar />      <div className="container" style={{ marginBottom: "5px",border: "1px solid black",  maxWidth: "400px" }}>
        <div className="row" style={{ }}>
          <div className="img" style={{ height: "250px", width: "400px" }} >
            <img className="img soloImage" src={process.env.PUBLIC_URL + "/assets/images/logo/second_pushup.jpg"} alt="Card image cap" >
            </img>
          </div>
          <div className="row">
            <div className="challenge" style={{ marginLeft: "25%" }}>
              <h3> Minute Challenge</h3>
              <h6> Choose a Minute Challenge</h6>
            </div>
            <div className="table" style = {{marginLeft: "8%", width: "400px"}}>
              < ExerciseTable />
            </div>
          </div>

          <div className="row" >
            <div className="addWorkOut" style={{  width: "400px", marginLeft: "15px" }}>
              <AddWorkout />
            </div>
          </div>

          <div className="row">
            <div className="img" style={{ height: "250px", width: "400px", marginLeft: "15px" }}>
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