import React from 'react'
//import { Link } from 'react-router-dom'
import './style.css'

function AddWorkout() {
  return (

    <div className="card" style={{ backgroundColor: "yellow" }}>
      <div className="container">
        <div className="dropdown">

          <button className="dropbtn">Choose Workout</button>
          <div className="dropdown-content">
            <a href="/PushUps">Push Ups</a>
            <a href="/Pushups">Jumping Jacks</a>
            <a href="/Pushups">Squat thrusts</a>
            <a href="/Pushups">Run a Mile</a>
            <a href="/Pushups">Sit Ups</a>
          </div>
        </div>
      </div>
    </div>
  );
}



export default AddWorkout