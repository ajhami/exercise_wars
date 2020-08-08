import React from 'react'
//import { Link } from 'react-router-dom'
import './style.css'

function AddWorkout() {
  return (

<div className="list-group">
  <a href="#" className="list-group-item list-group-item-action active">
    <h4>Pick Your Challenge</h4>
  </a>
  <a href="/PushUps" className="list-group-item list-group-item-action">Push Ups</a>
  <a href="Squats" className="list-group-item list-group-item-action">Squats</a>
  <a href="PullUps" className="list-group-item list-group-item-action">Pull Ups</a>
  <a href="SitUps" className="list-group-item list-group-item-action disabled">Sit Ups</a>
</div>
  
  );
}



export default AddWorkout