import React, { useState, useEffect } from 'react';
import { Card } from "reactstrap";
import Form from '../Form';
import FormInput from '../Form/FormInput';
import SelectInput from '../Form/SelectInput';
import SubForm from '../Form/SubForm';
import FormSubmit from '../Form/FormSubmit';
import AddPicture from "./AddPicture";
import axios from "axios";
import "./style.css";


const SaveWorkout = props => {
  const [workoutInputs, setWorkoutInputs] = useState({
    title: "",
    description: "",
    workoutType: "",
    time: "",
    image: "",
    likes: "",
    comments: "",
    exercises: []
  });

  useEffect(() => {
    axios.get("/api/workouts")
      .then(function (response) {
      })
      .catch(error => console.log(error))
  }, []);

  const handleAddRow = () => {
    const item = {
      exerciseName: "",
      reps: "",
      sets: "",
      weight: "",
      distance: "",
    };
    handleChange("exercises", [...workoutInputs.exercises, item]);
  };

  const handleRemoveSpecificRow = (idx) => () => {
    const rows = workoutInputs.exercises
    rows.splice(idx, 1)
    handleChange("exercises", [...workoutInputs.exercises]);
  }

  const handleChange = (name, value) => {
    setWorkoutInputs({ ...workoutInputs, [name]: value })
  }

  const handleFormSubmit = event => {
    event.preventDefault();
    axios.post("/api/workouts", workoutInputs)
      .then(function (response) {
         workoutInputs.id = response.data._id
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
          <SelectInput
            id="workoutType"
            value={workoutInputs.workoutType}
            onChange={event => {
              event.preventDefault();
              handleChange("workoutType", event.target.value);
            }}
            type={"select"}
            label="Workout Type: "
          />
          <SubForm
            exercises={workoutInputs.exercises}
            onExerciseUpdate={exercises => {
              handleChange("exercises", exercises);
            }}
            handleAddRow={handleAddRow}
            handleRemoveSpecificRow={handleRemoveSpecificRow}
          />
          <FormInput
            id="time"
            value={workoutInputs.time}
            onChange={event => {
              event.preventDefault();
              handleChange("time", event.target.value);
            }}
            label="Time: "
            placeholder={"h:mm:ss"}
          />
          <AddPicture />
          <FormSubmit className="btn btn-info" text="Save Workout" />
        </Form>
      </Card>
    </div>
  );
};

export default SaveWorkout;


