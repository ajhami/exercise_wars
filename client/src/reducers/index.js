import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import auth from "./auth";
import user from "./user"

export default combineReducers({
    auth,
    user,
    form: formReducer
});