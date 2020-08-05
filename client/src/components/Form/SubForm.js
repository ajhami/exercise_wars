import React from "react";

class SubForm extends React.Component {
    state = {
        rows: [{}]
    };
    handleChange = idx => e => {
        const { name, value } = e.target;
        const rows = [...this.state.rows];
        rows[idx] = {
            [name]: value
        };
        this.setState({
            rows
        });
    };
    handleAddRow = () => {
        const item = {
            name: "",
            mobile: ""
        };
        this.setState({
            rows: [...this.state.rows, item]
        });
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
                                        <th />
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.rows.map((item, idx) => (
                                        <tr id="addr0" key={idx}>
                                            <td>{idx + 1}</td>
                                            <td>
                                                <input
                                                    type="text"
                                                    name="exerciseName"
                                                    value={this.state.rows[idx].name}
                                                    onChange={this.handleChange(idx)}
                                                    className="form-control"
                                                />
                                            </td>
                                            <td>
                                                <input
                                                    type="text"
                                                    name="sets"
                                                    value={this.state.rows[idx].mobile}
                                                    onChange={this.handleChange(idx)}
                                                    className="form-control"
                                                />
                                            </td>
                                            <td>
                                                <input
                                                    type="text"
                                                    name="reps"
                                                    value={this.state.rows[idx].mobile}
                                                    onChange={this.handleChange(idx)}
                                                    className="form-control"
                                                />
                                            </td>
                                            <td>
                                                <input
                                                    type="text"
                                                    name="weight"
                                                    value={this.state.rows[idx].mobile}
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
                                    ))}
                                </tbody>
                            </table>
                            <button onClick={this.handleAddRow} className="btn btn-primary">
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