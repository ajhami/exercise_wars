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
        <div className="container" style={{ backgroundColor: "" }}>
          <div className="row" >

            <div class="col-sm">

           </div>
            <div class="col-sm" style = {{border: "1px solid black"}}>
              
              <div className="img" style={{ height: "250px", width: "100%" }} >
                <img className="img soloImage" src={process.env.PUBLIC_URL + "/assets/images/logo/second_pushup.jpg"} alt="pushups" >
                </img>
              </div>
              <div className="challenge" style={{ marginLeft: "15%" }}>
                <h3> Minute Challenge</h3>
                <h6> Choose a Minute Challenge</h6>
              </div>
              <div className="table" style={{marginLeft:"15%",  width: "70%" }}>
                < ExerciseTable />
              </div>

              <div className="addWorkOut" style={{ width: "400px", marginLeft: "%" }}>
                <AddWorkout />
              </div>
              <div className="img" style={{ height: "250px", width: "100%" }}>
                <img className="img soloImage" src={process.env.PUBLIC_URL + "/assets/images/logo/pullups.png"} alt="pushups" >
                </img>
              </div>
            </div>

            <div class="col-sm">
            </div>
          </div>
        </div>
         <Footer />
      </div >
    );
  };
};

export default SoloChallenge;