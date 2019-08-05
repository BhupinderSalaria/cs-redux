import * as types from "./actionTypes";
import * as playerApi from "../../api/playerApi";
export function createPlayer(player) {
  // debugger;
  return { type: types.CREATE_PLAYER, player };
}

export function loadPlayersSuccess(players) {
  return { type: types.LOAD_PLAYERS_SUCCESS, players };
}

//Thunk
export function loadPlayers() {
  return function(dispatch) {
    return playerApi.getplayers().then(players => {
      dispatch(loadPlayersSuccess(players));
    });
  };
}
