import React, { Component } from "react";
import { Link } from "react-router-dom";

class AuthHeader extends Component {
    render() {
        return(
            <div>
                <Link to="/TestAuth">Redux Auth</Link>
                <Link to="/Signup">Sign Up</Link>
                <Link to="/Login">Login</Link>
                <Link to="/Logout">Logout</Link>
            </div>
        )
    }
}

export default AuthHeader;