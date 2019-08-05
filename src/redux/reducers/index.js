import { combineReducers } from "redux";
import players from "./playerReducer";
import coaches from "./coachReducer";

const rootReducer = combineReducers({
  players,
  coaches
});
export default rootReducer;
