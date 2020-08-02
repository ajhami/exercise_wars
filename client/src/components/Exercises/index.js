import React, { Component } from "react";
import "./style.css";
// var rows = [],

function Exercises(props) {

    return (
        <tr>
            <td scope="row"> 1</td>
            <td>   {props.exerciseName}</td>
            <td>    {props.sets}</td>
            <td>  {props.reps}</td>
            <td>     {props.weight}</td>
            <td> 100</td>
        </tr>
    );
};

export default Exercises;






