import React, { useState, useEffect } from 'react';
import Moment from "moment";
import { Button, Container, Row, Col } from "reactstrap";
import Exercises from "../Exercises"
import "./style.css";
import { Table } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from "axios";

function Workout(props) {
    
    const [profileImageURL, setProfileImageURL] = useState();

    useEffect(() => {

        async function getProfileImg(username) {
            let response = await axios.post("getUserImg", { username: username });
            setProfileImageURL(response.data.url)
        }

        getProfileImg(props.user);

    }, []);

    return (
        <div className="card">
            <Container>
                <Row>
                    <Col xs={7}>
                        <img src={profileImageURL} className="miniProfileImg"/>
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
                            className="table exerciseTable mytable mobile-optimized"
                        >
                            <thead>
                                <tr>
                                    <th>name</th>
                                    <th>weight</th>
                                    <th>dist.</th>
                                    <th>reps</th>
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
                                                weight={exercise.weight}
                                            />
                                        )
                                    }
                                    )
                                }
                            </tbody>
                        </Table>

                    </li>
                    <Container>
                        <Row className="userStyle">
                            <Col xs={7} style={{ textAlign: "right" }}>Completion Time:</Col>
                            <Col xs={5} style={{ textAlign: "right" }}> {props.time}</Col>
                        </Row>
                    </Container>
                    <li>

                        <Container>
                            <Row>
                                <Col xs={3}>
                                    <Button
                                        className="button"
                                        style={{ fontSize: "smaller", margin: "1px" }}
                                        aria-hidden="true"
                                        onClick={() => props.clickDoWorkout(props)}>
                                        <FontAwesomeIcon icon="dumbbell" />Do this
                                        </Button>
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