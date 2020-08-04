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
                        <strong>ID:</strong> {props.id}
                    </li>
                    <li>
                        <strong>User:</strong> {props.user}
                    </li>
                    <li>
                        <strong>Title:</strong> {props.title}
                    </li>
                    <li>
                        <strong>Description:</strong> {props.description}
                    </li>
                    <li>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>exercise</th>
                                    <th>sets</th>
                                    <th>reps</th>
                                    <th>weight</th>
                                    <th>score</th>
                                </tr>
                            </thead>
                            <tbody>
                                {props.exercises.map(exercise => (
                                    <Exercises
                                    key = {exercise.id}
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