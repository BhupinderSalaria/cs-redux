import { combineReducers } from "redux";
import players from "./playerReducer";
import coaches from "./coachReducer";
import apiCallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
  players,
  coaches,
  apiCallsInProgress
});
export default rootReducer;
