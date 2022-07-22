import questionsReducer from "./questions";
import playersReducer from "./players";
import infoReducer from "./info";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    questionsReducer,
    playersReducer,
    infoReducer
});
export default allReducers;