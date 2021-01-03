import React from "react";
import { Button, Container, Table } from "reactstrap";
import "./table.css";

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