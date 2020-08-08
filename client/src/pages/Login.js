import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import * as actions from "../actions";
import "./login.css";


class Login extends Component {

    onSubmit = formProps => {
        this.props.signin(formProps, () => {
            this.props.history.push("/Home");
        })
    }

    render() {

        const { handleSubmit } = this.props;

        return (
            <div className="row">
                <div className="col-md-5 d-none d-md-block signin_img_div">
                    {/* Photo by Clem Onojeghuo on Unsplash */}
                    <img className="signin_img" src={process.env.PUBLIC_URL + "/assets/images/signin_img.jpg"} alt="signin_img"></img>
                    {/* <span>Photo by <a href="https://unsplash.com/@clemono2?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Clem Onojeghuo</a> on <a href="https://unsplash.com/s/photos/workout?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span> */}
                </div>
                <form className="col-md-7 loginForm" onSubmit={handleSubmit(this.onSubmit)}>
                    <div className="signin_title_div">
                        <h1 className="signin_title">Sign In</h1>
                        <a className="signup_atag" href="/Signup">Create Account</a>
                    </div>
                    <fieldset className="form-group email_group">
                        <label htmlFor="email">Email</label>
                        <Field
                            name="email"
                            type="email"
                            className="form-control"
                            id="usernameInput"
                            component="input"
                            autoComplete="none"
                        />
                    </fieldset>
                    <fieldset className="form-group">
                        <label htmlFor="password">Password</label>
                        <Field
                            name="password"
                            type="password"
                            className="form-control"
                            id="passwordInput"
                            component="input"
                            autoComplete="none"
                        />
                    </fieldset>
                    <div className="signin_btn_div">
                        <button type="submit" className="btn signin_btn">Sign In</button>
                        <div className="alert signin_alert" role="alert">
                            <h4 className="alert_text">
                                {this.props.errorMessage}
                            </h4>
                        </div>
                        <small id="forgotPassword" className="form-text text-muted">Forgot your password? Click <a href="/home">here</a> to recover.</small>
                    </div>
                </form>
            </div>
        );
    }
};

function mapStateToProps(state) {
    return { errorMessage: state.auth.errorMessage };
}


export default compose(
    connect(mapStateToProps, actions),
    reduxForm({ form: "signin" })
)(Login);
