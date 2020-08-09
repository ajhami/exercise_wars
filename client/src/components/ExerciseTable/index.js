import React from 'react'
// import { Link } from 'react-router-dom'
import './style.css'
function ExerciseTable() {
    return (
<table className="table table-bordered">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Push Ups</th>
      <th scope="col">Squats</th>
      <th scope="col">Pull Ups</th>
      <th scope="col">Sit Ups</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>8</td>
      <td>16</td>
      <td>2</td>
      <td>14</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>14</td>
      <td>24</td>
      <td>8</td>
      <td>25</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>20</td>
      <td>34</td>
      <td>16</td>
      <td>40</td>
    
    </tr>
  </tbody>
</table>

    )

}



export default ExerciseTable