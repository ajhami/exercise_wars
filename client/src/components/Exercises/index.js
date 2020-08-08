import React from "react";
import "./style.css";

function Exercises(props) {
     console.log(props)
    return (
        <tr>
            <td> {props.exerciseNumber}</td>
            <td>   {props.exerciseName}</td>
            <td>     {props.weight}</td>
            <td>    {props.distance}</td>
            <td>  {props.reps}</td>
            <td>    {props.sets}</td>
        </tr>
    );

};
export default Exercises;



