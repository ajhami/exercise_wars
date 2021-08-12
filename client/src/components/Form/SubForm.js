import React from "react";
import { Button, Container, Table } from "reactstrap";
import "./table.css";
import Autocomplete from 'react-autocomplete'

function SubForm(props) {
    const handleChange = idx => e => {
        e.preventDefault();
        const { name, value } = e.target;
        const rows = [...props.exercises];
        rows[idx] = {
            ...rows[idx],
            [name]: value,
        };
        props.onExerciseUpdate(rows)
    };

    var exercises = [
        { value: "Air squat" },
        { value: "Arm Circles" },
        { value: "Bear Crawl" },
        { value: "Bent-over row" },
        { value: "Bicep curl" },
        { value: "Bicycle" },
        { value: "Bike" },
        { value: "Calf raise" },
        { value: "Chin-up" },
        { value: "Crunch" },
        { value: "Burpee" },
        { value: 'Dead lift' },
        { value: 'Diamond push-up' },
        { value: 'Dip' },
        { value: 'Dolphin push-up' },
        { value: 'Donkey kick' },
        { value: 'Flutter kick' },
        { value: 'Fly' },
        { value: 'Good Morning' },
        { value: 'Handstand push-up' },
        { value: 'Inchworm' },
        { value: 'Karaoke' },
        { value: 'L seat' },
        { value: 'Leg curl' },
        { value: 'Lunge' },
        { value: 'Lying triceps extension' },
        { value: 'Mountain climber' },
        { value: 'Muscle-up' },
        { value: 'Overhead press' },
        { value: 'Pistol squat' },
        { value: 'Plank' },
        { value: 'Plyometric push-up' },
        { value: 'Power clean' },
        { value: 'Pull-up' },
        { value: 'Push-up' },
        { value: 'Reverse fly' },
        { value: 'Run' },
        { value: 'Russian Twist' },
        { value: 'Shoulder bridge' },
        { value: 'Side plank' },
        { value: 'Single leg dead lift' },
        { value: 'Sit-up' },
        { value: 'Snatch' },
        { value: 'Step-up' },
        { value: 'Superman' },
        { value: 'Swim' },
        { value: 'tricep dips' },
        { value: 'Tuck jump' },
        { value: 'Upright row' },
        { value: 'Walk' },
        { value: 'Wall sit' }
    ]

    return (
        <Container style={{ margin: "5px", }}>
            <div>
                <div className="container">
                    <div className="row clearfix">
                        <div className="col-md-12 column">
                            <Table striped
                                className="table table-hover"
                                id="table_id"
                            >
                                <tbody>
                                    {props.exercises.map((item, idx) => {
                                        return (
                                            <tr id="addr0" key={idx}>
                                                <td>{idx + 1}</td>
                                                <td style={{ width: "125px", }}>

                                                    <Autocomplete
                                                        getItemValue={(item) => item.value}
                                                        items={exercises}
                                                        renderItem={(item, isHighlighted) =>
                                                            <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
                                                                {item.value}
                                                            </div>
                                                        }
                                                        type="text"
                                                        name="exerciseName"
                                                        placeholder="exercise"
                                                        // value={item.value}
                                                        // onChange={(e) => item.value = e.target.value}
                                                        // onSelect={(val) => item.value = val}
                                                        className="form-control"
                                                    />


                                                </td>
                                                <td style={{ width: "80px", }}>
                                                    <input
                                                        type="text"
                                                        name="weight"
                                                        placeholder="weight"
                                                        value={item.weight}
                                                        onChange={handleChange(idx)}
                                                        className="form-control"
                                                    />
                                                </td>
                                                <td style={{ width: "65px", }}>
                                                    <input
                                                        type="text"
                                                        name="distance"
                                                        placeholder="dist."
                                                        value={item.distance}
                                                        onChange={handleChange(idx)}
                                                        className="form-control"
                                                    />
                                                </td>
                                                <td style={{ width: "75px", }}>
                                                    <input
                                                        type="number"
                                                        name="reps"
                                                        placeholder="reps"
                                                        value={item.reps}
                                                        onChange={handleChange(idx)}
                                                        className="form-control"
                                                    />
                                                </td>

                                                <td>
                                                    <Button
                                                        className="btn btn-outline-danger btn-sm"
                                                        outline color="secondary"
                                                        style={{ color: "#D90429", borderColor: "#D90429" }}
                                                        onClick={props.handleRemoveSpecificRow(idx)}
                                                    >
                                                        X
                        </Button>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </Table>
                            <Button
                                className="btn btn-outline-danger btn-sm"
                                outline color="secondary"
                                style={{ color: "#D90429", borderColor: "#D90429", marginBottom: "10px" }}
                                onClick={props.handleAddRow}
                            >
                                + Exercise
                        </Button>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}


export default SubForm;