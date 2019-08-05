import * as types from "../actions/actionTypes";
import intialState from "./initialState";

export default function playerReducer(state = intialState.players, action) {
  // debugger;
  switch (action.type) {
    case types.CREATE_PLAYER:
      return [...state, { ...action.player }];
    case types.LOAD_PLAYERS_SUCCESS:
      return action.players;
    default:
      return state;
  }
}
