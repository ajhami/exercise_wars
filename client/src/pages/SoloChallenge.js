import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from "reactstrap";
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import requireAuth from "../components/requireAuth";
import MinuteChallenge from "../components/MinuteChallenge";
import API from "../utils/API";
import axios from "axios";

const SoloChallenge = (props) => {
  const [challenges, setChallenges] = useState([]);
  const [workoutInputs, setWorkoutInputs] = useState({
    id: "",
    title: "",
    description: "",
    workoutType: "",
    time: 0,
    timeHours: "",
    timeMinutes: "",
    timeSeconds: "",
    image: "",
    likes: "",
    comments: "",
    exercises: []
  })

  const clickDoWorkout = (doThisWorkout) => {
    const token = localStorage.token;
    const userInfo = axios.post("/getuser", { token: token });
    const username = userInfo.username;
    let newDoThisWorkout = Object.assign({}, workoutInputs)
    newDoThisWorkout.title = doThisWorkout.title ? doThisWorkout.title : ""
    newDoThisWorkout.timeMinutes = 1
    newDoThisWorkout.image = doThisWorkout.image ? doThisWorkout.image : ""
    newDoThisWorkout.exercises = doThisWorkout.exercises
    newDoThisWorkout.exercises.exerciseName = doThisWorkout.exercises.exerciseName ? doThisWorkout.exercises.exerciseName : ""
    newDoThisWorkout.exercises.sets = doThisWorkout.exercises.sets ? doThisWorkout.exercises.sets : ""
    newDoThisWorkout.exercises.weight = doThisWorkout.exercises.weight ? doThisWorkout.exercises.weight : ""
    newDoThisWorkout.exercises.distance = doThisWorkout.exercises.distance ? doThisWorkout.exercises.distance : ""
    newDoThisWorkout.exercises.reps = doThisWorkout.exercises.reps ? doThisWorkout.exercises.reps : ""
    newDoThisWorkout.user = username;
    setWorkoutInputs(newDoThisWorkout);
    localStorage.setItem("newWorkout", JSON.stringify(newDoThisWorkout));
    window.location.pathname = '/AddWorkout'
  }

  useEffect(() => {
    API.fetchChallenges()
      .then(res => {
        setChallenges(challenges)
      })
  }, []);


  return (
    <div>
      <NavBar />
      <Container>
        <Row>
          <Col md={6}>
            <MinuteChallenge
              challenges={challenges}
              setChallenges={setChallenges}
              clickDoWorkout={clickDoWorkout}
            />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default requireAuth(SoloChallenge);