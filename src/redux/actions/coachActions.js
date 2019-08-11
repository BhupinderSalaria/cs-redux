import * as types from "./actionTypes";
import * as coachApi from "../../api/coachApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadCoachesSuccess(coaches) {
  return { type: types.LOAD_COACHES_SUCCESS, coaches };
}

export function createCoachSuccess(coach) {
  return { type: types.CREATE_COACH_SUCCESS, coach };
}

export function updateCoachSuccess(coach) {
  return { type: types.UPDATE_COACH_SUCCESS, coach };
}

//Thunk
export function loadCoaches() {
  return function(dispatch) {
    dispatch(beginApiCall());
    return coachApi
      .getCoaches()
      .then(coaches => {
        dispatch(loadCoachesSuccess(coaches));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

//Thunk
export function saveCoach(coach) {
  return function(dispatch, getState) {
    dispatch(beginApiCall());
    return coachApi
      .saveCoach(coach)
      .then(savedCoach => {
        coach.id
          ? dispatch(updateCoachSuccess(savedCoach))
          : dispatch(createCoachSuccess(savedCoach));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}
