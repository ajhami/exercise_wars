import React from 'react'
import './style.css'



function CreateAccount(props) {
    
    return (
        <form className="newUser">
            <div className="buttons">
                <label htmlFor="users">Username:</label>
                <input
                    value={props.CreateUser}
                    onChange= {props.handleUserChange}
                    name="createUser"
                    type="text"
                    placeholder="Username "
                    className="form-control"
                    id="createUser"
                />
                 <label htmlFor="users">Enter Password:</label>
                <input
                    value={props.password}
                    onChange= {props.handlePasswordChange}
                    name="createUserPassword"
                    type="password"
                    placeholder="Password "
                    className="form-control"
                    id="createUserPassword"
                />
                  <label htmlFor="users">Re-Enter Password:</label>
                <input
                    value={props.verifyPassword}
                    onChange= {props.handleVerifyPasswordChange}
                    name="verifyUserPassword"
                    type="password"
                    placeholder="Retype Password "
                    className="form-control"
                    id="verifyUserPassword"
                />

            </div>
        </form>

    );
    
}



export default CreateAccount