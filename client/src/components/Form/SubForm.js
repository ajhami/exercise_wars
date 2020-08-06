import React from "react";

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
        <div>
            <div className="container">
                <div className="row clearfix">
                    <div className="col-md-12 column">
                        <table
                            className="table table-bordered table-hover"
                            id="tab_logic"
                        >
                            <thead>
                                <tr>
                                    <th className="text-center"> # </th>
                                    <th className="text-center"> Exercise </th>
                                    <th className="text-center"> reps </th>
                                    <th className="text-center"> sets </th>
                                    <th className="text-center"> weight </th>
                                    <th className="text-center"> distance </th>
                                    <th />
                                </tr>
                            </thead>
                            <tbody>
                                {props.exercises.map((item, idx) => {
                                    return (
                                        <tr id="addr0" key={idx}>
                                            <td>{idx + 1}</td>
                                            <td>
                                                <input
                                                    type="text"
                                                    name="exerciseName"
                                                    value={item.exerciseName}
                                                    onChange={handleChange(idx)}
                                                    className="form-control"
                                                />
                                            </td>
                                            <td>
                                                <input
                                                    type="text"
                                                    name="reps"
                                                    value={item.reps}
                                                    onChange={handleChange(idx)}
                                                    className="form-control"
                                                />
                                            </td>
                                            <td>
                                                <input
                                                    type="text"
                                                    name="sets"
                                                    value={item.sets}
                                                    onChange={handleChange(idx)}
                                                    className="form-control"
                                                />
                                            </td>
                                            <td>
                                                <input
                                                    type="text"
                                                    name="weight"
                                                    value={item.weight}
                                                    onChange={handleChange(idx)}
                                                    className="form-control"
                                                />
                                            </td>
                                            <td>
                                                <input
                                                    type="text"
                                                    name="distance"
                                                    value={item.distance}
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
                        </table>
                        <button onClick={props.handleAddRow} className="btn btn-primary">
                            +
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
}


export default SubForm;