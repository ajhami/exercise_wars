import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

class Logout extends Component {
    async componentDidMount() {
        try {
            await this.props.signout();
            await this.props.history.push("/");
        }
        catch(err) {
            console.log(err);
        };
    };

    render() {
        return(
            <h1>Thank you for visiting Exercise Wars!</h1>
        );
    };
};

export default connect(null, actions)(Logout);