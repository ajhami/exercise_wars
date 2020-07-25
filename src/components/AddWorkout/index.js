import React from 'react'
// import { Link } from 'react-router-dom'
import './style.css'

function AddWorkout() {
   

        return (
    
          <div className="card">
            <div className="container" style={{ color: "red", height: "250px", width: "250px" }}>
              <div class="dropdown">
    
                <div class="dropdown">
                  <button class="dropbtn">Choose Workout</button>
                  <div class="dropdown-content">
                    <a href="#">Push Up</a>
                    <a href="#">Jumping Jack</a>
                    <a href="#">Squat thrust</a>
                  </div>
                </div>
              </div>
            </div>
            </div>
        );
}



export default AddWorkout