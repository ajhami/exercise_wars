import React from 'react';
import Moment from "moment";
import { Button, Container, Row, Col } from "reactstrap";
import Exercises from "../Exercises"
import "./style.css";
import { Table } from "reactstrap";

function Workout(props) {
    return (
        <div className="card">
            <div className="img-container">
                <img alt={props.title} src={props.image} />
            </div>
            <div className="content">
                <ul>
                    <li>
                        <Container>
                            <Row>
                                <Col className="userStyle">
                                    {props.user}
                                </Col>
                                <Col>{Moment(props.date).format("MMM D, YYYY")}</Col>
                            </Row>
                            <Row>
                                <strong>{props.title}</strong>
                            </Row>
                            <Row>
                                {props.description}
                            </Row>
                        </Container>
                    </li>
                    <li>
                        <Table striped
                            className="table exerciseTable"
                            >
                            <thead>
                                <tr>
                                    <th style={{ width: "5px", }}>#</th>
                                    <th style={{ width: "5px", }}>name</th>
                                    <th style={{ width: "5px", }}>weight</th>
                                    <th style={{ width: "5px", }}>dist.</th>
                                    <th style={{ width: "5px", }}>reps</th>
                                    <th style={{ width: "5px", }}>sets</th>
                                </tr>
                            </thead>
                            <tbody>
                                {props.exercises
                                    .map((exercise, idx) => {
                                        return (
                                            <Exercises
                                                key={exercise._id}
                                                exerciseNumber={idx + 1}
                                                exerciseName={exercise.exerciseName}
                                                distance={exercise.distance}
                                                reps={exercise.reps}
                                                sets={exercise.sets}
                                                weight={exercise.weight}
                                            />
                                        )
                                    }
                                    )
                                }
                            </tbody>

                        </Table>

                    </li>
                    <li>Time to complete: {props.time}</li>
                    <li>
                        <Button className="fa fa-thumbs-up" style={{ fontSize: "smaller" }} aria-hidden="true"></Button> {props.likes}
                    </li>
                    <li>
                        <Button>Comments: {props.comments}</Button>
                    </li>
                </ul>
            </div>
        </div>
    )
}



export default Workout;