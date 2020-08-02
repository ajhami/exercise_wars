import axios from "axios";
import { AUTH_USER, AUTH_ERROR } from "./types";

export const signup = (formProps, cb) => async dispatch => {
    try {
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