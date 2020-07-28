import React from "react";
import "./style.css";

function LoginForm() {
    return (
        <div className="row">
            <form className="col-md-6 loginForm">
                <section className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="username" className="form-control" id="usernameInput" />
                </section>
                <section className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="passwordInput" />
                </section>
                <button type="submit" className="btn">Sign In</button>
                <small id="forgotPassword" className="form-text text-muted">Forgot your password? Click <a href="/home">here</a> to recover.</small>
            </form>
        </div>
    );
};

export default LoginForm;
