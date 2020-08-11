import { USER_PROFILE } from "../actions/types";

const USER_STATE = {
    user: {
        id: "",
        username: "",
        firstName: "",
        lastName: "",
        birthday: "",
        location: "",
        height: "",
        weight: "",
        memberSince: "",
        following: [],
        followers: [],
        workouts: []
    }
};

export default function(state = USER_STATE, action) {
    switch(action.type) {
        case USER_PROFILE:
            return {...state, user: action.payload}; 
        default:
            return state;
    }
}