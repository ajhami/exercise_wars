import React from 'react';
import Moment from "moment";
import { Button, Container, Row, Col } from "reactstrap";
import Exercises from "../Exercises"
import "./style.css";
import { Table } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Workout(props) {
    return (
        <div className="card">
            <Container>
                <Row>
                    <Col xs={7}>
                        {props.user}
                    </Col>
                    <Col xs={5} style={{ textAlign: "right" }}>{Moment(props.date).format("MMM D, YYYY")}</Col>
                </Row>
                <Row>
                    <Col xs={7}><strong>{props.title}</strong></Col>
                    <Col xs={5} style={{ textAlign: "right" }}> {props.workoutType}</Col>
                </Row>
                <Row className="userStyle">
                    {props.description}
                </Row>
            </Container>
            <div className="img-container">
                <img src={props.image} />
            </div>
            <div className="content">
                <ul>
                    <li>
                    </li>
                    <li>
                        <Table striped
                            className="table exerciseTable"
                        >
                            <thead>
                                <tr>
                                    <th >#</th>
                                    <th >name</th>
                                    <th >weight</th>
                                    <th >dist.</th>
                                    <th >reps</th>
                                    <th >sets</th>
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
                    <li>
                        <Table
                            className="timeTable">
                            <thead style={{ border: "none" }}>
                                <tr>
                                    <th>
                                        hours
                                </th>
                                    <th>
                                        minutes
                                </th>
                                    <th>
                                        seconds
                                </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{props.timeHours}</td>
                                    <td>{props.timeMinutes} </td>
                                    <td>{props.timeSeconds} </td>
                                </tr>
                            </tbody></Table>


                    </li>
                    <li>

                        <Container>
                            <Row>
                            <Col xs={3}>
                                    <Button
                                        className="button"
                                        style={{ fontSize: "smaller", margin: "1px" }}
                                        aria-hidden="true"
                                        onClick={() => props.clickDoWorkout(props)}>Do this workout</Button> {props.comments}
                                </Col>
                                <Col xs={3}>
                                    <Button className="button" style={{ fontSize: "smaller", margin: "1px" }} aria-hidden="true"><FontAwesomeIcon icon="thumbs-up" /></Button> {props.likes}
                                </Col>
                                <Col xs={3}>
                                    <Button className="button" style={{ fontSize: "smaller", margin: "1px" }} aria-hidden="true"><FontAwesomeIcon icon="comment" /></Button> {props.comments}
                                </Col>

                            </Row>
                        </Container>
                    </li>
                </ul>
            </div>
        </div>
    )
}



export default Workout;