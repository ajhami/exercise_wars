import { SEARCH_USERS } from "../actions/types";

const SEARCHED_USERS_STATE = {
    searchedUsers: [{
        username: "",
        imageURL: ""
    }]
};

export default function(state = SEARCHED_USERS_STATE, action) {
    switch(action.type) {
        case SEARCH_USERS:
            return {...state, searchedUsers: action.payload}; 
        default:
            return state;
    }
}