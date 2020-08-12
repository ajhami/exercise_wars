import React from 'react';
import { Card, Button, Row, Col, Container } from "reactstrap";
import Form from '../Form';
import FormInput from '../Form/FormInput';
import FormTime from '../Form/FormTime';
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
    const rows = props.workoutInputs.exercises
    rows.splice(idx, 1)
    handleChange("exercises", [...props.workoutInputs.exercises]);
  }

  const handleChange = (name, value) => {
    props.setWorkoutInputs({ ...props.workoutInputs, [name]: value })
  }

  const handleFormSubmit = event => {
    event.preventDefault();
    props.callWorkoutAPI();

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

          <Container>
            <Row>
              <Col xs={4}>Time: </Col>
              <Col xs={8}>
                <div id="timeContainer">
                  <FormTime
                    id="timeHours"
                    type="Number"
                    value={props.workoutInputs.timeHours}
                    onChange={event => {
                      event.preventDefault();
                      handleChange("timeHours", event.target.value);
                    }}
                    placeholder={"hh"}
                  />
                  <FormTime
                    id="timeMinutes"
                    type="Number"
                    value={props.workoutInputs.timeMinutes}
                    onChange={event => {
                      event.preventDefault();
                      handleChange("timeMinutes", event.target.value);
                    }}
                    label=":"
                    placeholder={"mm"}
                  />
                  <FormTime
                    id="timeSeconds"
                    type="Number"
                    value={props.workoutInputs.timeSeconds}
                    onChange={event => {
                      event.preventDefault();
                      handleChange("timeSeconds", event.target.value);
                    }}
                    label=": "
                    placeholder={"ss"}
                  />
                </div>
              </Col>
            </Row>
          </Container>
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


