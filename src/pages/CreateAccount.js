import React, { Component } from "react";
import API from "../utils/API.js";
import Container from "../components/Container"
import CreateUser from "../components/CreateUser/index"

class newAccount extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }

    loadUsers = () => {
        API.getUsers()
            .then(res => {
                let users = res.data.results;
                let newState = { users };
                this.setState(newState);
            })
            .catch(err => {
                console.log(err)
            })


    }

    render() {
        return (
            <div>
                <h1 className="text-center">Create Your Account</h1>
                <Container style={{ minHeight: "80%" }}>
                    <Button

                        handleInputChange={this.handleInputChange}

                    />
                    <Table employees={this.state.shown}>
                    </Table>
                </Container>
            </div>
        );
    }

};
export default newAccount