import axios from "axios";
import { AUTH_USER, AUTH_ERROR, USER_PROFILE, SEARCH_USERS, UPDATE_PROFILE, UPDATE_PROFILE_IMG } from "./types";

export const signup = (formProps, cb) => async dispatch => {
    try {

        if (!formProps.email) {
            return dispatch({ type: AUTH_ERROR, payload: "⚠ Missing email address!" });
        }
        else if (!formProps.password) {
            return dispatch({ type: AUTH_ERROR, payload: "⚠ Missing Password!" });
        }
        else if (formProps.password.length < 8) {
            return dispatch({ type: AUTH_ERROR, payload: "⚠ Please adjust your password to include at least 8 characters!" });
        }
        else if (formProps.password !== formProps.verifyPassword) {
            return dispatch({ type: AUTH_ERROR, payload: "⚠ Your password attempts don't match. Try again!" });
        }
        else if (!formProps.dobMonth || !formProps.dobDay || !formProps.dobYear) {
            return dispatch({ type: AUTH_ERROR, payload: "⚠ Please enter a valid birthday." });
        }



        const response = await axios.post("/signup", formProps);
        dispatch({ type: AUTH_USER, payload: response.data.token });
        localStorage.setItem("token", response.data.token);
        cb();
    }

    catch (err) {
        dispatch({ type: AUTH_ERROR, payload: "⚠ This email address is already in use." })
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
        const response = await axios.post("/signin", formProps);
        dispatch({ type: AUTH_USER, payload: response.data.token });
        localStorage.setItem("token", response.data.token);
        cb();
    }

    catch (err) {
        dispatch({ type: AUTH_ERROR, payload: "⚠ Invalid Login. Try again!" })
    };
};

export const getProfileData = (cb) => async dispatch => {
    try {
        const token = localStorage.token;

        if (token) {
            const response = await axios.post("/getuser", { token: token });
            dispatch({ type: USER_PROFILE, payload: response.data.user });
            cb();
        }
    }

    catch (err) {
        dispatch({ type: AUTH_ERROR, payload: "⚠ Invalid Login. Try again!" });
    }
}

export const searchUsers = (formProps, cb) => async dispatch => {
    try {
        const response = await axios.post("/searchProfiles", { searchedUsername: formProps.searchedUsername });
        dispatch({ type: SEARCH_USERS, payload: response.data.matchedUsers });
        cb();
    }

    catch (err) {
        dispatch({ type: AUTH_ERROR, payload: "No results." })
    }
}

export const updateProfile = (data, cb) => async dispatch => {
    try {
        const response = await axios.post("/updateProfile", { profileUpdates: data });
        dispatch({ type: UPDATE_PROFILE, payload: response.data.updatedData }); // UPDATE LATER
        cb();
    }

    catch (err) {
        dispatch({ type: AUTH_ERROR, payload: "Failed to update your profile." });
    }
}

export const updateProfileImg = (data, cb) => async dispatch => {
    try {
        const response = await axios.post("/updateProfileImg", { imageObject: data });
        dispatch({ type: UPDATE_PROFILE_IMG, payload: response.data.updatedImgData }); // UPDATE LATER
        cb();
    }

    catch (err) {
        dispatch({ type: AUTH_ERROR, payload: "Failed to update your profile picture." });
    }
}