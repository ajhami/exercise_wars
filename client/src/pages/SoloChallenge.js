import React, { Component } from 'react';
import AddWorkout from "../components/AddWorkout"
import ExerciseTable from "../components/ExerciseTable"

// import VideoContainer from "../components/VideoContainer"
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

class SoloChallenge extends Component {

  render() {
    return (
      <div className="container" style={{  width: "70%px", marginBottom: "25px" }}>
        <div className="row">
          <div class="col-sm">
            <div className="img" style = {{ height:"350px" }} >
              <img className="img soloImage" src={process.env.PUBLIC_URL + "/assets/images/logo/second_pushup.jpg"} alt="Card image cap" >
              </img>
            </div>
          </div>

          <div class="col-sm">
            <div className="card" style={{ width: "100%", backgroundColor: "salmon", width: "25%", height: "350px", marginLeft: "5%" }}>
              <div className="challenge" style={{ marginLeft: "15%" }}>
                <h3> Minute Challenge</h3>
                <h6> Choose a Minute Challenge</h6>
              </div>
              <div className="col-sm">
                < ExerciseTable />
              </div>
              <AddWorkout />
            </div>
          </div>

          <div class="col-sm">
            <div className="img" style= {{height: "350px"}}>
              <img className="img soloImage" src={process.env.PUBLIC_URL + "/assets/images/logo/pullups.png"} alt="Card image cap" >
              </img>
            </div>
          </div>

        </div>
      </div>
    );
  };
};

export default SoloChallenge;