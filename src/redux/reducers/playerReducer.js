import * as types from "../actions/actionTypes";
import intialState from "./initialState";

export default function playerReducer(state = intialState.players, action) {
  // debugger;
  switch (action.type) {
    case types.CREATE_PLAYER_SUCCESS:
      return [...state, { ...action.player }];
    case types.UPDATE_PLAYER_SUCCESS:
      return state.map(player =>
        player.id === action.player.id ? action.player : player
      );
    case types.LOAD_PLAYERS_SUCCESS:
      return action.players;
    default:
      return state;
  }
}
