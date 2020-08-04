import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import { Alert } from "reactstrap";
import * as actions from "../../actions";
import "./style.css";

const stateInits = ['AL', 'AK', 'AR', 'AZ', 'CA', 'CO', 'CT', 'DC', 'DE', 'FL', 'GA', 'HI', 'ID', 'IA', 'IL', 'IN', 'KS', 'KY', 'LA', 'MA', 'MD', 'ME', 'MI', 'MN', 'MO', 'MS', 'MT', 'NC', 'ND', 'NE', 'NJ', 'NH', 'NM', 'NV', 'NY', 'OH', 'OK', 'OR', 'PA', 'RI', 'PR', 'SD', 'SC', 'TN', 'TX', 'UT', 'VA', 'VI', 'VT', 'WA', 'WV', 'WI', 'WY'];

class TestSignup extends Component {

    onSubmit = (formProps) => {
        this.props.signup(formProps, () => {
            this.props.history.push("/AuthSuccess");
        });
    };

    render() {

        const { handleSubmit } = this.props;

        return (

            <form onSubmit={handleSubmit(this.onSubmit)}>

                <label>First Name</label>
                <fieldset>
                    <Field
                        name="firstName"
                        type="text"
                        component="input"
                        autoComplete="none"
                        placeholder="Jane"
                    />
                </fieldset>

                <label>Last Name</label>
                <fieldset>
                    <Field
                        name="lastName"
                        type="text"
                        component="input"
                        autoComplete="none"
                        placeholder="Doe"
                    />
                </fieldset>

                <label>Email</label>
                <fieldset>
                    <Field
                        name="email"
                        type="email"
                        component="input"
                        autoComplete="none"
                        placeholder="janedoe@email.com"
                    />
                </fieldset>

                <label>Set a Personal Username</label>
                <fieldset>
                    <Field
                        name="username"
                        type="text"
                        component="input"
                        autoComplete="none"
                        placeholder="jd94"
                    />
                </fieldset>

                <label>Password</label>
                <fieldset>
                    <Field
                        name="password"
                        type="password"
                        component="input"
                        autoComplete="none"
                    />
                </fieldset>

                <label>Verify Password</label>
                <fieldset>
                    <Field
                        name="verifyPassword"
                        type="password"
                        component="input"
                        autoComplete="none"
                    />
                </fieldset>

                <label>Birthday</label>
                <fieldset>
                    <Field
                        name="dobMonth"
                        type="number"
                        min="1"
                        max="12"
                        component="input"
                        autoComplete="none"
                        placeholder="MM"
                    />
                    <Field
                        name="dobDay"
                        type="number"
                        min="1"
                        max="31"
                        component="input"
                        autoComplete="none"
                        placeholder="DD"
                    />
                    <Field
                        name="dobYear"
                        type="number"
                        min="1900"
                        max="2020"
                        component="input"
                        autoComplete="none"
                        placeholder="YYYY"
                    />
                </fieldset>

                <label>* Location</label>
                <fieldset>
                    <small>City:</small>
                    <Field
                        name="locCity"
                        type="text"
                        component="input"
                        autoComplete="none"
                    />
                    <small>State:</small>
                    <Field
                        name="locState"
                        component="select"
                    >
                        <option value="">Select a State</option>
                        {stateInits.map(state => (
                            <option key={state} value={state}>
                                {state}
                            </option>
                        ))}
                    </Field>
                </fieldset>

                <label>* height (in.)</label>
                <fieldset>
                    <Field
                        name="height"
                        type="number"
                        component="input"
                        min="0"
                        autoComplete="none"
                    />
                </fieldset>

                <label>* weight (lbs)</label>
                <fieldset>
                    <Field
                        name="weight"
                        type="number"
                        component="input"
                        min="0"
                        autoComplete="none"
                    />
                </fieldset>

                <div className="row alert_section">
                    <div className="alert alert-warning" role="alert">
                        {this.props.errorMessage}
                    </div>
                </div>
                <Alert>
                    {this.props.errorMessage}
                </Alert>
                <button>Sign Up</button>
            </form>
        )
    }
}

function mapStateToProps(state) {
    return { errorMessage: state.auth.errorMessage };
}

export default compose(
    connect(mapStateToProps, actions),
    reduxForm({ form: "signup" })
)(TestSignup);