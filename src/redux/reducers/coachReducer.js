import * as types from "../actions/actionTypes";
import intialState from "./initialState";

export default function coachReducer(state = intialState.coaches, action) {
  // debugger;
  switch (action.type) {
    case types.LOAD_COACHES_SUCCESS:
      return action.coaches;
    default:
      return state;
  }
}
