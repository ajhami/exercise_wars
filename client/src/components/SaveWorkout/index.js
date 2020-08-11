import React, { useState, useEffect } from 'react';
import { Card, Button } from "reactstrap";
import Form from '../Form';
import FormInput from '../Form/FormInput';
import SelectInput from '../Form/SelectInput';
import SubForm from '../Form/SubForm';
import FormSubmit from '../Form/FormSubmit';
import AddPicture from "./AddPicture";
import axios from "axios";
import "./style.css";
import API from '../../utils/API';

const SaveWorkout = props => {
  // const [props.workouts, setWorkoutInputs] = useState({
  //   title: "",
  //   description: "",
  //   workoutType: "",
  //   time: "",
  //   image: "",
  //   likes: "",
  //   comments: "",
  //   exercises: []
  // });

  // useEffect(() => {
  //   axios.get("/api/workouts")
  //     .then(function (response) {
  //     })
  //     .catch(error => console.log(error))
  // }, []);

  const handleAddRow = (event) => {
    event.preventDefault();
    const item = {
      reps: "",
      sets: "",
      weight: "",
      distance: "",
    };
    handleChange("exercises", [...props.workouts.exercises, item]);
    console.log("handleAddRow")
  };

  const handleRemoveSpecificRow = (idx) => () => {
    const rows = props.workouts.exercises
    rows.splice(idx, 1)
    handleChange("exercises", [...props.workouts.exercises]);
  }

  const handleChange = (name, value) => {
    props.setWorkouts({ ...props.workouts, [name]: value })
  }

  const handleFormSubmit = event => {
    event.preventDefault();
    event.stopPropagation();
    API.postWorkouts();
  };

  const runWorkout = () => {
    document.getElementById("workoutForm").dispatchEvent(new Event('submit'));

  }
console.log(props)
  return (
    <div>
      <Card>
        <div className="card-header">
          <h3 style={{ color: '#555', marginLeft: '12px' }}>Add a Workout</h3>
        </div>
        <Form idName="workoutForm"
          handleFormSubmit={handleFormSubmit}
        >
          <FormInput
            id="workoutTitle"
            value={props.workouts.title}
            onChange={event => {
              event.preventDefault();
              handleChange("title", event.target.value);
            }}
            label="Title: "
          />

          <FormInput
            id="workoutDescription"
            value={props.workouts.description}
            onChange={event => {
              event.preventDefault();
              handleChange("description", event.target.value);
            }}
            label="Description: "
          />
          <SelectInput
            id="workoutType"
            value={props.workouts.workoutType}
            onChange={event => {
              event.preventDefault();
              handleChange("workoutType", event.target.value);
            }}
            type={"select"}
            label="Workout Type: "
          />
          <SubForm
            exercises={props.workouts.exercises}
            onExerciseUpdate={exercises => {
              handleChange("exercises", exercises);
            }}
            handleAddRow={handleAddRow}
            handleRemoveSpecificRow={handleRemoveSpecificRow}
          />
          <FormInput
            id="time"
            value={props.workouts.time}
            onChange={event => {
              event.preventDefault();
              handleChange("time", event.target.value);
            }}
            label="Time to Complete: "
            placeholder={"h:mm:ss"}
          />
        </Form>

        <AddPicture
          id="image"
          value={props.workouts.image}
          onImageChange={(image) => {
            handleChange("image", image);
          }
          }
        >
          <form
            action="/profile"
            method="post"
            enctype="multipart/form-data">
            <input
              type="file"
              name="avatar" />
          </form>
        </AddPicture>

        <Button
          className="btn btn-danger FormSubmit-button"
          onClick={runWorkout}
          // outline color="secondary"
          style={{ color: "white", borderColor: "#D90429", margin: "5px" }}

        > Save Workout</Button>
      </Card>
    </div>
  );
};

export default SaveWorkout;


