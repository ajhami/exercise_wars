import React from "react";
import "./style.css";


function Exercises(props) {
    return (
        <tr>
            <td className="tdHide"> <span className="labelHide">#</span> <span className="exerciseValue"> {props.exerciseNumber}</span></td>
            <td className="tdHide">  <span className="labelHide">name:</span> <span className="exerciseValue">{props.exerciseName}</span></td>
            {!props.weight && window.innerWidth <= 500 ? "" : (<td className="tdHide">  <span className="labelHide">weight:</span><span className="exerciseValue">{props.weight}</span></td>)}
            {!props.distance && window.innerWidth <= 500 ? "" : (<td className="tdHide">  <span className="labelHide">distance:</span> <span className="exerciseValue"> {props.distance}</span></td>)}
            {!props.reps && window.innerWidth <= 500 ? "" : (<td className="tdHide">  <span className="labelHide">reps:</span><span className="exerciseValue">{props.reps}</span></td>)}
        </tr>
    );

};
export default Exercises;



