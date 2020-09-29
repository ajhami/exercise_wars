import React, { useEffect, useState } from 'react';
// import API from "../utils/API";
import { Container, Row, Col } from "reactstrap";
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import requireAuth from "../components/requireAuth";
import SaveWorkout from "../components/SaveWorkout";
import API from "../utils/API";


const AddWorkout = () => {
  const [workouts, setWorkouts] = useState([]);
  const [workoutInputs, setWorkoutInputs] = useState({
    id: "",
    title: "",
    description: "",
    workoutType: "",
    time: "",
    timeHours: "",
    timeMinutes: "",
    timeSeconds: "",
    image: "",
    exercises: []
  })

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


  useEffect(() => {
    API.fetchWorkouts(localStorage.token)
      .then(res => {
        const sortedWorkouts = [].concat(res)
          .sort((a, b) => Date(a.date) < Date(b.date) ? 1 : -1)
        setWorkouts(sortedWorkouts)
        if(localStorage.getItem("newWorkout") === null) {
          setWorkoutInputs(workoutInputs)}
          else {
        setWorkoutInputs(JSON.parse(localStorage.getItem('newWorkout')))
          }
      })

  }, []);




// useEffect(() => {
//       setWorkoutInputs(JSON.parse(localStorage.getItem('newWorkout')))
// }, []);

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
        
      </Row>
    </Container>
    <Footer />
  </div>
);
};

export default requireAuth(AddWorkout);