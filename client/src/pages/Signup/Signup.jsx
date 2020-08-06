import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
// import { Alert } from "reactstrap";
import * as actions from "../../actions";
import "./style.css";

const stateInits = ['AL', 'AK', 'AR', 'AZ', 'CA', 'CO', 'CT', 'DC', 'DE', 'FL', 'GA', 'HI', 'ID', 'IA', 'IL', 'IN', 'KS', 'KY', 'LA', 'MA', 'MD', 'ME', 'MI', 'MN', 'MO', 'MS', 'MT', 'NC', 'ND', 'NE', 'NJ', 'NH', 'NM', 'NV', 'NY', 'OH', 'OK', 'OR', 'PA', 'RI', 'PR', 'SD', 'SC', 'TN', 'TX', 'UT', 'VA', 'VI', 'VT', 'WA', 'WV', 'WI', 'WY'];

class Signup extends Component {

    onSubmit = (formProps) => {
        this.props.signup(formProps, () => {
            this.props.history.push("/Home");
        });
    };

    render() {

        const { handleSubmit } = this.props;

        return (

            <div className="row">

                <div className="col-md-7 signup_form_div">


                    <div className="signup_title_div">
                        <h1 className="signup_title">Create Your Exersice Wars Account</h1>
                    </div>

                    <a className="signin_atag" href="/Login">Login</a>

                    <form className="signup_form" onSubmit={handleSubmit(this.onSubmit)}>

                        <label className="signup_field_labels top_label">First Name</label>
                        <fieldset className="signup_fieldset">
                            <Field
                                name="firstName"
                                type="text"
                                component="input"
                                autoComplete="none"
                                placeholder="Jane"
                                className="signup_general_field"
                            />
                        </fieldset>

                        <label className="signup_field_labels">Last Name</label>
                        <fieldset className="signup_fieldset">
                            <Field
                                name="lastName"
                                type="text"
                                component="input"
                                autoComplete="none"
                                placeholder="Doe"
                                className="signup_general_field"
                            />
                        </fieldset>

                        <label className="signup_field_labels">Email</label>
                        <fieldset className="signup_fieldset">
                            <Field
                                name="email"
                                type="email"
                                component="input"
                                autoComplete="none"
                                placeholder="janedoe@email.com"
                                className="signup_general_field"
                            />
                        </fieldset>

                        <label className="signup_field_labels">Set Your Username</label>
                        <fieldset className="signup_fieldset">
                            <Field
                                name="username"
                                type="text"
                                component="input"
                                autoComplete="none"
                                placeholder="jd94"
                                className="signup_general_field"
                            />
                        </fieldset>

                        <label className="signup_field_labels">Password</label>
                        <fieldset className="signup_fieldset">
                            <Field
                                name="password"
                                type="password"
                                component="input"
                                autoComplete="none"
                                className="signup_general_field"
                            />
                        </fieldset>

                        <label className="signup_field_labels">Verify Password</label>
                        <fieldset className="signup_fieldset">
                            <Field
                                name="verifyPassword"
                                type="password"
                                component="input"
                                autoComplete="none"
                                className="signup_general_field"
                            />
                        </fieldset>

                        <label className="signup_field_labels">Birthday</label>
                        <fieldset className="signup_fieldset">
                            <Field
                                name="dobMonth"
                                type="number"
                                className="dob_field"
                                min="1"
                                max="12"
                                component="input"
                                autoComplete="none"
                                placeholder="MM"
                            />
                            <span className="birthday_forwardslashes">/</span>
                            <Field
                                name="dobDay"
                                type="number"
                                className="dob_field"
                                min="1"
                                max="31"
                                component="input"
                                autoComplete="none"
                                placeholder="DD"
                            />
                            <span className="birthday_forwardslashes">/</span>
                            <Field
                                name="dobYear"
                                type="number"
                                className="dob_field_year"
                                min="1900"
                                max="2020"
                                component="input"
                                autoComplete="none"
                                placeholder="YYYY"
                            />
                        </fieldset>

                        <label className="signup_field_labels">* Location</label>
                        <fieldset className="signup_fieldset">
                            <Field
                                name="locCity"
                                type="text"
                                component="input"
                                autoComplete="none"
                                placeholder="Enter a City"
                                className="loc_city_field"
                            />
                            <Field
                                name="locState"
                                component="select"
                                className="loc_state_field"
                            >
                                <option value="">Select a State</option>
                                {stateInits.map(state => (
                                    <option key={state} value={state}>
                                        {state}
                                    </option>
                                ))}
                            </Field>
                        </fieldset>

                        <label className="signup_field_labels">* height (in.)</label>
                        <fieldset className="signup_fieldset">
                            <Field
                                name="height"
                                type="number"
                                component="input"
                                min="0"
                                autoComplete="none"
                                className="signup_general_field"
                            />
                        </fieldset>

                        <label className="signup_field_labels">* weight (lbs)</label>
                        <fieldset className="signup_fieldset">
                            <Field
                                name="weight"
                                type="number"
                                component="input"
                                min="0"
                                autoComplete="none"
                                className="signup_general_field"
                            />
                        </fieldset>

                        <div className="signup_btn_div">
                            <button type="submit" className="btn signup_btn">Sign Up</button>
                            <div className="alert signup_alert" role="alert">
                                <h4 className="alert_text">
                                    {this.props.errorMessage}
                                </h4>
                            </div>
                        </div>

                    </form>
                </div>

                <div className="col-md-5 d-none d-md-block signup_img_div">
                    {/* Photo by Clique Images on Unsplash */}
                    <img className="signup_img" src={process.env.PUBLIC_URL + "/assets/images/signup_img.jpg"} alt="signup_img"></img>
                    {/* <span>Photo by <a href="https://unsplash.com/@cliqueimages?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Clique Images</a> on <a href="https://unsplash.com/s/photos/workout?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>                </div> */}
                </div>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return { errorMessage: state.auth.errorMessage };
}

export default compose(
    connect(mapStateToProps, actions),
    reduxForm({ form: "signup" })
)(Signup);