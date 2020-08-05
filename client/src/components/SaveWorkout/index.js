import React, { useState } from 'react';
import { Card } from "reactstrap";
import Form from '../Form';
import FormInput from '../Form/FormInput';
import FormSubmit from '../Form/FormSubmit';
import AddPicture from "./AddPicture";
import axios from "axios";
import "./style.css";

const SaveWorkout = props => {
  const [workoutInput, setWorkoutInput] = useState("");
  axios.get("/api/workouts")
  .then(function (response) {
    console.log(response);
  })
  .catch(error => console.log(error))

  const handleFormSubmit = event => {
    event.preventDefault();
    axios.post("/api/workouts", 
    {
      title: workoutInput,
  })
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
        value={workoutInput}
        onChange={e => setWorkoutInput(e.target.value)}
        label="Title: "
       />
             <AddPicture />
             <FormSubmit className="btn btn-info" text="Add Workout" />
      </Form>


      </Card>
    </div>
  );
};

export default SaveWorkout;


