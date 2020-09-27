import React from "react";
import "./style.css";

function Exercises(props) {
    return (
        <tr>
            <td> <span className="labelHide">exercise #</span> <span className="exerciseValue"> {props.exerciseNumber}</span></td>
            <td>  <span className="labelHide">name:</span> <span className="exerciseValue">{props.exerciseName}</span></td>
            <td>    <span className="labelHide">weight:</span><span className="exerciseValue"> {props.weight}</span></td>
            <td>  <span className="labelHide">distance:</span> <span className="exerciseValue"> {props.distance}</span></td>
            <td>  <span className="labelHide">reps:</span><span className="exerciseValue">{props.reps}</span></td>
            <td> <span className="labelHide">sets:</span>  <span className="exerciseValue"> {props.sets}</span></td>
        </tr>
    );

};
export default Exercises;



