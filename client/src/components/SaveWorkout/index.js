import React from 'react';
import { Card, Button } from "reactstrap";
import Form from '../Form';
import FormInput from '../Form/FormInput';
import FormTextArea from '../Form/FormTextArea';
import SelectInput from '../Form/SelectInput';
import SubForm from '../Form/SubForm';
import AddPicture from "./AddPicture";
import "./style.css";
import API from '../../utils/API';

const SaveWorkout = props => {

  const handleAddRow = (event) => {
    event.preventDefault();
    const item = {
      reps: "",
      sets: "",
      weight: "",
      distance: "",
    };
    handleChange("exercises", [...props.workoutInputs.exercises, item]);
  };

  const handleRemoveSpecificRow = (idx) => () => {
    const rows = props.workouts.exercises
    rows.splice(idx, 1)
    handleChange("exercises", [...props.workoutInputs.exercises]);
  }

  const handleChange = (name, value) => {
    props.setWorkoutInputs({ ...props.workoutInputs, [name]: value })
  }

  const handleFormSubmit = event => {
    event.preventDefault();
    props.workoutInputs.token = localStorage.token;
    API.postWorkouts(props.workoutInputs);
 
  };

  const runWorkout = () => {
    document.getElementById("workoutForm").dispatchEvent(new Event('submit'));

  }
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
            value={props.workoutInputs.title}
            onChange={event => {
              event.preventDefault();
              handleChange("title", event.target.value);
            }}
            label="Title: "
          />

          <FormTextArea
            id="workoutDescription"
            value={props.workoutInputs.description}
            onChange={event => {
              event.preventDefault();
              handleChange("description", event.target.value);
            }}
            label="Description: "

          />
          <SelectInput
            id="workoutType"
            className="workoutTypeDrop"
            value={props.workoutInputs.workoutType}
            onChange={event => {
              event.preventDefault();
              handleChange("workoutType", event.target.value);
            }}
            type={"select"}
            label={"Workout Type: "}
          />
          <SubForm
            exercises={props.workoutInputs.exercises}
            onExerciseUpdate={exercises => {
              handleChange("exercises", exercises);
            }}
            handleAddRow={handleAddRow}
            handleRemoveSpecificRow={handleRemoveSpecificRow}
          />
          <FormInput
            id="time"
            value={props.workoutInputs.time}
            onChange={event => {
              event.preventDefault();
              handleChange("time", event.target.value);
            }}
            label="Completion time: "
            placeholder={"h:mm:ss"}
          />
        </Form>

        <AddPicture
          id="image"
          value={props.workoutInputs.image}
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


