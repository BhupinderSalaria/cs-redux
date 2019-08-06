import * as types from "./actionTypes";
import * as playerApi from "../../api/playerApi";

export function loadPlayersSuccess(players) {
  return { type: types.LOAD_PLAYERS_SUCCESS, players };
}
export function createPlayerSuccess(player) {
  return { type: types.CREATE_PLAYER_SUCCESS, player };
}

export function updatePlayerSuccess(player) {
  return { type: types.UPDATE_PLAYER_SUCCESS, player };
}

//Thunk
export function loadPlayers() {
  return function(dispatch) {
    return playerApi.getplayers().then(players => {
      dispatch(loadPlayersSuccess(players));
    });
  };
}

//Thunk
export function savePlayer(player) {
  return function(dispatch, getState) {
    return playerApi
      .saveplayer(player)
      .then(savedPlayer => {
        player.id
          ? dispatch(updatePlayerSuccess(savedPlayer))
          : dispatch(createPlayerSuccess(savedPlayer));
      })
      .catch(error => {
        throw error;
      });
  };
}
