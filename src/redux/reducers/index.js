import { combineReducers } from "redux";
import players from "./playerReducer";
import coaches from "./coachReducer";
import games from "./gameReducer";
import apiCallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
  players,
  coaches,
  games,
  apiCallsInProgress
});
export default rootReducer;
