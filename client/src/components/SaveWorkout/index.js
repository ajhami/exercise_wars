import React, { useState } from 'react';
import { Card } from "reactstrap";
import Form from '../Form';
import FormInput from '../Form/FormInput';
import SubForm from '../Form/SubForm';
import FormSubmit from '../Form/FormSubmit';
import AddPicture from "./AddPicture";
import axios from "axios";
import "./style.css";


const SaveWorkout = props => {
  const [workoutInputs, setWorkoutInputs] = useState({
    title: "",
    description: "",
    image: "",
    exercises: [{
      exerciseName: "",
      reps: "",
      sets: "",
      weight: ""
    }]
  });
  const handleChange = (name, value) => {
    // console.log(event.target.value)
    setWorkoutInputs({ ...workoutInputs, [name]: value })
  }
  axios.get("/api/workouts")
    .then(function (response) {
      console.log(response);
    })
    .catch(error => console.log(error))

  const handleFormSubmit = event => {
    event.preventDefault();
    axios.post("/api/workouts", workoutInputs)
      .then(function (response) {
        console.log(response);
      })
      .catch(error => console.log(error))
  };

  return (
    <div>
      <Card>
        <div className="card-header">
          <h3 style={{ color: '#555', marginLeft: '12px' }}>Add a Workout</h3>
        </div>
        <Form handleFormSubmit={handleFormSubmit}>
          <FormInput
            id="workoutTitle"
            value={workoutInputs.title}
            onChange={event => {
              event.preventDefault();
              handleChange("title", event.target.value);
            }}
            label="Title: "
          />
          <FormInput
            id="workoutDescription"
            value={workoutInputs.description}
            onChange={event => {
              event.preventDefault();
              handleChange("description", event.target.value);
            }}
            label="Description: "
          />

          <AddPicture />
          <SubForm

          />
          <FormSubmit className="btn btn-info" text="Add Workout" />
        </Form>


      </Card>
    </div>
  );
};

export default SaveWorkout;


