import React, { Component } from "react";
import { Table } from "reactstrap";
import "./style.css";

function Exercises(props) {
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <th>#</th>
                    <th>exercise</th>
                    <th>sets</th>
                    <th>reps</th>
                    <th>weight</th>
                    <th>score</th>
                </thead>
                <tbody>

                    <tr>
                    <React.Fragment>
                        <th scope="row">1</th>
                        <td>{props.exerciseName}</td>
                        <td>{props.sets}</td>
                        <td>{props.reps}</td>
                        <td>{props.weight}</td>
                        <td>100</td>
                        </React.Fragment>
                    </tr>

                </tbody>
            </Table>
        </div>
    );
};

export default Exercises;






