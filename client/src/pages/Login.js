// import React from "react";
// import LoginForm from "./../components/LoginForm";

// function Login() {
//     return (
//             <LoginForm />
//     )
// };

// export default Login;

import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import * as actions from "../actions";
import "./login.css";


class Login extends Component {

    onSubmit = formProps => {
        // event.preventDefault();
        this.props.signin(formProps, () => {
            this.props.history.push("/AuthSuccess");
        })
    }

    render() {
        
        const { handleSubmit } = this.props;

        return (
            <div className="row" onSubmit={handleSubmit(this.onSubmit)}>
                <form className="col-md-6 loginForm">
                    <fieldset className="form-group">
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
                    <button type="submit" className="btn">Sign In</button>
                    <small id="forgotPassword" className="form-text text-muted">Forgot your password? Click <a href="/home">here</a> to recover.</small>
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
