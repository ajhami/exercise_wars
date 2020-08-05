import React from 'react'
//import { Link } from 'react-router-dom'
import './style.css'
function AddWorkout() {
  return (

    <div className="card"id="workoutCard"  >
      <div className="container">
        <div className="dropdown" style={{ marginLeft: "25%" }}>

          <button className="dropbtn">Choose Workout</button>
          <div className="dropdown-content">
            <a href="/PushUps">Push Ups</a>
            <a href="/Pushups">Squats</a>
            <a href="/Pushups">Pull Ups</a>
            <a href="/Pushups">Sit Ups</a>
          </div>
        </div>
        <img className="img" id="workoutImg" src={process.env.PUBLIC_URL + "/assets/images/logo/dumbell_logo_192x192.png"} alt="Card image cap" >

        </img>

      </div>
   </div>
  );
}



export default AddWorkout