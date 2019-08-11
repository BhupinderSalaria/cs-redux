import * as types from "../actions/actionTypes";
import intialState from "./initialState";

export default function coachReducer(state = intialState.coaches, action) {
  //debugger;
  switch (action.type) {
    case types.CREATE_COACH_SUCCESS:
      return [...state, { ...action.coach }];
    case types.UPDATE_COACH_SUCCESS:
      return state.map(coach =>
        coach.id === action.coach.id ? action.coach : coach
      );
    case types.LOAD_COACHES_SUCCESS:
      return action.coaches;
    default:
      return state;
  }
}
