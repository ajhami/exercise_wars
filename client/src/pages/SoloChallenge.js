import React, { Component } from 'react';
import AddWorkout from "../components/AddWorkout"
import ExerciseTable from "../components/ExerciseTable"

// import VideoContainer from "../components/VideoContainer"
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

class SoloChallenge extends Component {

  render() {
    return (
      <div className="container" style={{ width: "30%", marginBottom: "25px", border: "1px solid black"}}>
        <div className="row">
          <div class="col-sm">
            <div className="img" style={{ height: "250px" }} >
              <img className="img soloImage" src={process.env.PUBLIC_URL + "/assets/images/logo/second_pushup.jpg"} alt="Card image cap" >
              </img>
            </div>
          </div>
        </div>
       
        <div className="row" style = {{width:"100"}}>
          <div class="col-sm">
            <div className="card" style={{ backgroundColor: "salmon", width: "95%", height: "250px", border: "1px solid black", marginRight: "75%" }}>
              <div className="challenge" style={{ marginLeft: "23%" }}>
                <h3> Minute Challenge</h3>
                <h6> Choose a Minute Challenge</h6>
              </div>
              <div className="col-sm">
                < ExerciseTable />
              </div>
            </div>
          </div>
        </div>

        <div className="row" style= {{width: "107%"}}>
          <div className="col-sm" style={{ height: "250px", marginLeft: "3%", width: "100%"}}>
            <AddWorkout />
          </div>
        </div>

        <div className="row">
          <div class="col-sm">
            <div className="img" style={{ height: "250px", marginBottom:"20px" }}>
              <img className="img soloImage" src={process.env.PUBLIC_URL + "/assets/images/logo/pullups.png"} alt="Card image cap" >
              </img>
            </div>
          </div>
        </div>
      </div >
    );
  };
};

export default SoloChallenge;