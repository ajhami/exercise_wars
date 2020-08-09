import React from 'react'
//import { Link } from 'react-router-dom'
import './style.css'

function AddWorkout() {
  return (

    <div className="list-group list-responsive" style={{}}>
      <a href="#" class="list-group-item list-group-item-action active">
        <h4>Pick Your Challenge</h4>
      </a>
      <div className="dropDown">
        <a href="/PushUps" className="list-group-item list-group-item-action"><p>Push Ups</p></a>
        <a href="Squats" className="list-group-item list-group-item-action"><p>Squats</p></a>
        <a href="PullUps" className="list-group-item list-group-item-action"><p>Pull Ups</p></a>
        <a href="SitUps" className="list-group-item list-group-item-action disabled"><p>Sit Ups</p></a>
      </div>
    </div>

  );
}



export default AddWorkout