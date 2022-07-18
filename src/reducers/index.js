import questionsReducer from "./questions";
import playersReducer from "./players";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    questionsReducer,
    playersReducer
});
export default allReducers;