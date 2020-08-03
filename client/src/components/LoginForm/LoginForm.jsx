import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import * as actions from "../../actions";
import "./style.css";

class LoginForm extends Component {

    onSubmit = formProps => {
        // event.preventDefault();
        this.props.signin(formProps, () => {
            this.props.history.push("/AuthSuccess");
        })
    }

    render() {
        return (
            <div className="row">
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
)(LoginForm);

























// import React from "react";
// import "./style.css";

// function LoginForm() {
//     return (
//         <div className="row">
//             <form className="col-md-6 loginForm">
//                 <section className="form-group">
//                     <label htmlFor="username">Username</label>
//                     <input type="username" className="form-control" id="usernameInput" />
//                 </section>
//                 <section className="form-group">
//                     <label htmlFor="password">Password</label>
//                     <input type="password" className="form-control" id="passwordInput" />
//                 </section>
//                 <button type="submit" className="btn">Sign In</button>
//                 <small id="forgotPassword" className="form-text text-muted">Forgot your password? Click <a href="/home">here</a> to recover.</small>
//             </form>
//         </div>
//     );
// };

// export default LoginForm;
