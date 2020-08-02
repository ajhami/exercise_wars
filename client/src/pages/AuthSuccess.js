import React, { Component } from "react";
import AuthHeader from "../components/AuthHeader";
import requireAuth from "../components/requireAuth";


class AuthSuccess extends Component {
    render() {
        return(
            <div>
                <AuthHeader />
                <h1>Logged In Successfully</h1>
            </div>
        )
    }
}

export default requireAuth(AuthSuccess);