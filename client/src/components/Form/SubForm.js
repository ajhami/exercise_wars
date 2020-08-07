import React from "react";
import {Button, Container, Table} from "reactstrap";
import "./table.css";

function SubForm(props) {
    const handleChange = idx => e => {
        e.preventDefault();
        const { name, value } = e.target;
        const rows = [...props.exercises];
        rows[idx] = {
            ...rows[idx],
            [name]: value
        };

        props.onExerciseUpdate(rows)
    };

    return (
        <Container style={{ margin: "5px", }}>
        <div>          
            <div className="container">
                <div className="row clearfix">
                    <div className="col-md-12 column">
                        <h3>Exercises</h3>
                        <Table striped
                            className="table table-hover"
                            id="table_id"
                        >
                            <tbody>
                                {props.exercises.map((item, idx) => {
                                    return (
                                        <tr id="addr0" key={idx}>
                                            <td>{idx + 1}</td>
                                            <td style={{ width: "150px", }}>
                                                <input
                                                    type="text"
                                                    name="exerciseName"
                                                    placeholder="exercise"
                                                    value={item.exerciseName}
                                                    onChange={handleChange(idx)}
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
                                            <td style={{ width: "75px", }}>
                                                <input
                                                    type="number"
                                                    name="sets"
                                                    placeholder="sets"
                                                    value={item.sets}
                                                    onChange={handleChange(idx)}
                                                    className="form-control"
                                                />
                                            </td>
                                            <td>
                                                <button
                                                    className="btn btn-outline-danger btn-sm"
                                                    onClick={props.handleRemoveSpecificRow(idx)}
                                                >
                                                    X
                        </button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </Table>
                        <Button outline color="primary" style={{ marginBottom: "10px", }} onClick={props.handleAddRow} className="btn btn-primary">
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