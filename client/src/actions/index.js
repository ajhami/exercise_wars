import axios from "axios";
import { AUTH_USER, AUTH_ERROR } from "./types";

export const signup = (formProps, cb) => async dispatch => {
    try {
        console.log(formProps.email);
        console.log(formProps.password);
        console.log(formProps.verifyPassword);
        if(!formProps.email) {
            return dispatch({ type: AUTH_ERROR, payload: "Missing email address!" });
        }
        else if(!formProps.password) {
            return dispatch({ type: AUTH_ERROR, payload: "Missing Password!" });
        }
        else if(formProps.password.length < 8) {
            return dispatch({ type: AUTH_ERROR, payload: "Please adjust your password to include at least 8 characters!" });
        }
        else if(formProps.password !== formProps.verifyPassword) {
            return dispatch({ type: AUTH_ERROR, payload: "Your password attempts don't match. Try again!" });
        }



        const response = await axios.post("http://localhost:3001/signup", formProps);
        dispatch({ type: AUTH_USER, payload: response.data.token });
        localStorage.setItem("token", response.data.token);
        cb();
    }

    catch(err) {
        dispatch({ type: AUTH_ERROR, payload: "This email address is already in use." })
    };
};

export const signout = () => {
    localStorage.removeItem("token");

    return {
        type: AUTH_USER,
        payload: ""
    };
};

export const signin = (formProps, cb) => async dispatch => {
    try {
        const response = await axios.post("http://localhost:3001/signin", formProps);
        dispatch({ type: AUTH_USER, payload: response.data.token });
        localStorage.setItem("token", response.data.token);
        cb();
    }

    catch(err) {
        dispatch({ type: AUTH_ERROR, payload: "Invalid Login. Try again!" })
    };
};