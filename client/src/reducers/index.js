import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import auth from "./auth";
import user from "./user";
import searchedUsers from "./searchedUsers";

export default combineReducers({
    auth,
    user,
    searchedUsers,
    form: formReducer
});