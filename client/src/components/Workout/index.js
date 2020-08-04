import React from "react";
import { Button } from "reactstrap";
import "./style.css";
import Exercises from "../Exercises"
import { Table } from "reactstrap";

function Workout(props) {
    console.log(props.exercises)
    return (
        <div className="card">
            <div className="img-container">
                <img alt={props.title} src={props.image} />
            </div>
            <div className="content">
                <ul>
                    <li>
                        <strong>{props.title}</strong>
                        <p>{props.description}</p>
                        <p className="userStyle">{props.user}</p>
                    </li>
                    <li>
                        <Table striped bordered hover className="exerciseTable">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>exercise</th>
                                    <th>sets</th>
                                    <th>reps</th>
                                    <th>weight</th>
                                </tr>
                            </thead>
                            <tbody>
                                {props.exercises.map(exercise => (
                                    <Exercises
                                        key={exercise.id}
                                        exerciseName={exercise.name}
                                        reps={exercise.reps}
                                        sets={exercise.sets}
                                        weight={exercise.weight}
                                    />
                                ))}
                            </tbody>
                        </Table>
                    </li>
                    <li>
                        <Button>Likes: {props.likes}</Button>
                    </li>
                    <li>
                        <Button>Comments: {props.comments}</Button>
                    </li>
                </ul>
            </div>
        </div>

    );
}

export default Workout;