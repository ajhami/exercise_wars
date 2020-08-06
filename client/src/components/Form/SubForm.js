import React from "react";

class SubForm extends React.Component {

    handleChange = idx => e => {
        e.preventDefault();
        const { name, value } = e.target;

        const rows = [...this.props.exercises];

        rows[idx] = {
            ...rows[idx],
            [name]: value
        };

        this.props.onExerciseUpdate(rows)
    };

    handleRemoveRow = () => {
        this.setState({
            rows: this.state.rows.slice(0, -1)
        });
    };
    handleRemoveSpecificRow = (idx) => () => {
        const rows = [...this.state.rows]
        rows.splice(idx, 1)
        this.setState({ rows })
    }
    render() {
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
                                    {this.props.exercises.map((item, idx) => {
                                        return (
                                        <tr id="addr0" key={idx}>
                                            <td>{idx + 1}</td>
                                            <td>
                                                <input
                                                    type="text"
                                                    name="exerciseName"
                                                    value={item.exerciseName}
                                                    onChange={this.handleChange(idx)}
                                                    className="form-control"
                                                />
                                            </td>
                                            <td>
                                                <input
                                                    type="text"
                                                    name="reps"
                                                    value={item.reps}
                                                    onChange={this.handleChange(idx)}
                                                    className="form-control"
                                                />
                                            </td>
                                            <td>
                                                <input
                                                    type="text"
                                                    name="sets"
                                                    value={item.sets}
                                                    onChange={this.handleChange(idx)}
                                                    className="form-control"
                                                />
                                            </td>

                                            <td>
                                                <input
                                                    type="text"
                                                    name="weight"
                                                    value={item.weight}
                                                    onChange={this.handleChange(idx)}
                                                    className="form-control"
                                                />
                                            </td>
                                            <td>
                                                <input
                                                    type="text"
                                                    name="distance"
                                                    value={item.distance}
                                                    onChange={this.handleChange(idx)}
                                                    className="form-control"
                                                />
                                            </td>
                                            <td>
                                                <button
                                                    className="btn btn-outline-danger btn-sm"
                                                    onClick={this.handleRemoveSpecificRow(idx)}
                                                >
                                                    X
                        </button>
                                            </td>
                                        </tr>
                                    )})}
                                </tbody>
                            </table>
                            <button onClick={this.props.handleAddRow} className="btn btn-primary">
                                Add Row
                        </button>
                            <button
                                onClick={this.handleRemoveRow}
                                className="btn btn-danger float-right"
                            >
                                Delete Last Row
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SubForm;