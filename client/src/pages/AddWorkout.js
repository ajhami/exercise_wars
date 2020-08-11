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
    time: "",
    image: "",
    likes: "",
    comments: "",
    exercises: []
  })

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
            />
          </Col>
          <Col md={6}>
            <FriendFeed
              workouts={workouts}
              setWorkouts={setWorkouts}
            />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default requireAuth(AddWorkout);