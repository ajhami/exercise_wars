import React from "react";
import "./style.css";

function Exercises(props) {
  
    return (
        <tr>
            <td scope="row"> 1</td>
            <td>   {props.exerciseName}</td>
            <td>    {props.sets}</td>
            <td>  {props.reps}</td>
            <td>     {props.weight}</td>
        </tr> 
    );
};

export default Exercises;
