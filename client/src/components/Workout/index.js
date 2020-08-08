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
                    <li>Time to complete: {props.time}</li>
                    <li>
                        <Container><Row>
                            <Col md={3}>
                            <Button className="fa fa-thumbs-up" style={{ fontSize: "smaller" }} aria-hidden="true"></Button> {props.likes}
                            </Col>
                            <Col md={9}>
                            <Button className="fa fa-comment" style={{ fontSize: "smaller" }} aria-hidden="true"></Button> {props.comments}
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