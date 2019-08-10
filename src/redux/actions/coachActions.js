import * as types from "./actionTypes";
import * as coachApi from "../../api/coachApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadCoachesSuccess(coaches) {
  return { type: types.LOAD_COACHES_SUCCESS, coaches };
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
        dispatch(apiCallError());
        throw error;
      });
  };
}
