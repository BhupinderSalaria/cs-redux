import * as types from "../actions/actionTypes";
import intialState from "./initialState";

export default function gameReducer(state = intialState.games, action) {
  //debugger;
  switch (action.type) {
    case types.LOAD_GAMES_SUCCESS:
      return action.games;
    default:
      return state;
  }
}
