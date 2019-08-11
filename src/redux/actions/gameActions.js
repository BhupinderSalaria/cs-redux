import * as types from "./actionTypes";
import * as gameApi from "../../api/gameApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadGamesSuccess(games) {
  return { type: types.LOAD_GAMES_SUCCESS, games };
}

//Thunk
export function loadGames() {
  //debugger;
  return function(dispatch) {
    dispatch(beginApiCall());
    return gameApi
      .getGames()
      .then(games => {
        //debugger;
        dispatch(loadGamesSuccess(games));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}
