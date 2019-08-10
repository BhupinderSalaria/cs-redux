import * as types from "./actionTypes";
import * as playerApi from "../../api/playerApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadPlayersSuccess(players) {
  return { type: types.LOAD_PLAYERS_SUCCESS, players };
}
export function createPlayerSuccess(player) {
  return { type: types.CREATE_PLAYER_SUCCESS, player };
}

export function updatePlayerSuccess(player) {
  return { type: types.UPDATE_PLAYER_SUCCESS, player };
}

export function deletePlayerOptimistic(player) {
  return { type: types.DELETE_PLAYER_OPTIMISTIC, player };
}
//Thunk
export function loadPlayers() {
  return function(dispatch) {
    dispatch(beginApiCall());
    return playerApi
      .getplayers()
      .then(players => {
        dispatch(loadPlayersSuccess(players));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

//Thunk
export function savePlayer(player) {
  return function(dispatch, getState) {
    dispatch(beginApiCall());
    return playerApi
      .saveplayer(player)
      .then(savedPlayer => {
        player.id
          ? dispatch(updatePlayerSuccess(savedPlayer))
          : dispatch(createPlayerSuccess(savedPlayer));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function deletePlayer(player) {
  return function(dispatch) {
    // Doing optimistic delete, so not dispatching begin/end api call
    // actions, or apiCallError action since we're not showing the loading status for this.
    dispatch(deletePlayerOptimistic(player));
    return playerApi.deleteplayer(player.id);
  };
}
