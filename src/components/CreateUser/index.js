import React from 'react'
import './style.css'

function CreateUser(props) {
    return (
        <form className="newUser">
            <div className="buttons">
                <label htmlFor="users">New User:</label>
                <input
                    value={props.newUser}
                    onChange={props.handleInputChange}
                    name="createUser"
                    type="text"
                    placeholder="Example `John Smith` "
                    className="form-control"
                    id="createUser"
                />
                 <label htmlFor="users">New User:</label>
                <input
                    value={props.password}
                    onChange={props.handleInputChange}
                    name="createUserPassword"
                    type="password"
                    placeholder="Example `John Smith` "
                    className="form-control"
                    id="createUserPassword"
                />

            </div>
        </form>

    );
}



export default CreateUser