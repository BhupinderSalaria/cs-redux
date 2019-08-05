import * as types from "./actionTypes";
import * as coachApi from "../../api/coachApi";

export function loadCoachesSuccess(coaches) {
  return { type: types.LOAD_COACHES_SUCCESS, coaches };
}

//Thunk
export function loadCoaches() {
  return function(dispatch) {
    return coachApi.getCoaches().then(coaches => {
      dispatch(loadCoachesSuccess(coaches));
    });
  };
}
