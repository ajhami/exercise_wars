import React, { Component } from "react";
import CreateAccount from "./../components/CreateAccount";
import Wrapper from "./../components/Wrapper"

class CreateUser extends Component {

constructor(props) {
    super(props);
    this.state = {
         CreateUser: "",
         password: "",
         verifyPassword: ""
 
     }
}


    handleUserChange = event => {
        event.preventDefault();
        let user = event.target.CreateUser;

        this.setState({ CreateUser: user });
        console.log(this.state.CreateUser)
    }
    handlePasswordChange = event => {
        event.preventDefault();
        let userPassword = event.target.password;

        this.setState({ password : userPassword });
        console.log(this.state.password)
    }

    handleVerifyPasswordChange = event => {
        event.preventDefault();
        let userVerifyPassword = event.target.verifyPassword;

        this.setState({ verifyPassword: userVerifyPassword });
        console.log(this.state.verifyPassword)

    }



    render() {
        return (
            <div>
                <h1 className="text-center">Create Your Account</h1>
                <Wrapper style={{ minHeight: "80%" }}>
                    <CreateAccount
                        CreateUser = {this.state.CreateUser}
                        password = {this.state.password}
                        verifyPassword = {this.state.verifyPassword} 

                    handleVerifyPasswordChange = {this.handleVerifyPasswordChange}
                    handlePasswordChange = {this.handlePasswordChange}
                    handleUserChange = {this.handleUserChange}
                        />
                </Wrapper>
            </div>
        );
    }

};

export default CreateUser;