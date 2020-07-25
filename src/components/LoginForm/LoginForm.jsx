import React from "react";
import "./style.css";

function LoginForm() {
    return (
        <form className="loginForm">
            <section className="form-group">
                <label htmlFor="username">Username</label>
                <input type="username"  className="form-control" id="usernameInput"/>
            </section>
            <section className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" id="passwordInput"/>
            </section>
            <button type="submit" className="btn">Sign In</button>
        </form>
    );
};

export default LoginForm;
