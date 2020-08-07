import React from 'react'
//import { Link } from 'react-router-dom'
import './style.css'

function AddWorkout() {
  return (

    // <div className="card" style={{ backgroundColor: "blue" }}>
      <div className="container">
        <div className="dropdown" style = {{marginLeft: "22%"}}>

          <button className="dropbtn">Choose Workout</button>
          <div className="dropdown-content">
            <a href="/PushUps">Push Ups</a>
            <a href="/Squats">Squats</a>
            <a href="/PullUps">Pull Ups</a>
            <a href="/SitUps">Sit Ups</a>
          </div>
        </div>
      </div>
    
  );
}



export default AddWorkout