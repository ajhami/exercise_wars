import React, { useEffect, useState } from 'react';
// import API from "../utils/API";
import { Container, Row, Col } from "reactstrap";
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import requireAuth from "../components/requireAuth";
import SaveWorkout from "../components/SaveWorkout";
import FriendFeed from "../components/FriendFeed";
import API from "../utils/API";
import axios from "axios";

const AddWorkout = (props) => {
  const [workouts, setWorkouts] = useState([]);
  const [workoutInputs, setWorkoutInputs] = useState({
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
    newDoThisWorkout.title = doThisWorkout.title
    newDoThisWorkout.timeHours = doThisWorkout.timeHours ? doThisWorkout.timeHours : ""
    newDoThisWorkout.timeMinutes = doThisWorkout.timeMinutes ? doThisWorkout.timeMinutes : ""
    newDoThisWorkout.timeSeconds = doThisWorkout.timeSeconds ? doThisWorkout.timeSeconds : ""
    newDoThisWorkout.workoutType = doThisWorkout.workoutType ? doThisWorkout.workoutType : ""
    newDoThisWorkout.image = doThisWorkout.image ? doThisWorkout.image : ""
    newDoThisWorkout.exercises = doThisWorkout.exercises
    newDoThisWorkout.exercises.exerciseName = doThisWorkout.exercises.exerciseName ? doThisWorkout.exercises.exerciseName : ""
    newDoThisWorkout.exercises.sets = doThisWorkout.exercises.sets ? doThisWorkout.exercises.sets : ""
    newDoThisWorkout.exercises.weight = doThisWorkout.exercises.weight ? doThisWorkout.exercises.weight : ""
    newDoThisWorkout.exercises.distance = doThisWorkout.exercises.distance ? doThisWorkout.exercises.distance : ""
    newDoThisWorkout.exercises.reps = doThisWorkout.exercises.reps ? doThisWorkout.exercises.reps : ""
    newDoThisWorkout.user = username;
    setWorkoutInputs(newDoThisWorkout)
  }



const callWorkoutAPI = () => {
  workoutInputs.token = localStorage.token;
  API.postWorkouts(workoutInputs)
    .then(function (response) {
      let newFeed = [workoutInputs, ...workouts]
      setWorkouts(newFeed)
      // return response.data;
    })
    .catch(error => console.log(error));
};

//set the workout to the resturn of the API
useEffect(() => {
  API.fetchWorkouts()
    .then(res => {
      const sortedWorkouts = [].concat(res)
        .sort((a, b) => Date(a.date) < Date(b.date) ? 1 : -1)
      setWorkouts(sortedWorkouts)
      setWorkoutInputs(workoutInputs)
    })
}, []);


return (
  <div>
    <NavBar />
    <Container>
      <Row>
        <Col md={6}>
          <SaveWorkout
            workoutInputs={workoutInputs}
            setWorkoutInputs={setWorkoutInputs}
            callWorkoutAPI={callWorkoutAPI}
          />
        </Col>
        <Col md={6}>
            {/* <FriendFeed
              workouts={workouts}
              setWorkouts={setWorkouts}
              clickDoWorkout={clickDoWorkout}
            /> */}
        </Col>
      </Row>
    </Container>
    <Footer />
  </div>
);
};

export default requireAuth(AddWorkout);