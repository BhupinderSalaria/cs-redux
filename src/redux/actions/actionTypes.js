export const LOAD_PLAYERS_SUCCESS = "LOAD_PLAYERS_SUCCESS";
export const LOAD_COACHES_SUCCESS = "LOAD_COACHES_SUCCESS";
export const CREATE_PLAYER_SUCCESS = "CREATE_PLAYER_SUCCESS";
export const UPDATE_PLAYER_SUCCESS = "UPDATE_PLAYER_SUCCESS";
export const BEGIN_API_CALL = "BEGIN_API_CALL";
export const API_CALL_ERROR = "API_CALL_ERROR";
// By convention, actions that end in "_SUCCESS" are assumed to have been the result of a completed
// API call. But since we're doing an optimistic delete, we're hiding loading state.
// So this action name deliberately omits the "_SUCCESS" suffix.
// If it had one, our apiCallsInProgress counter would be decremented below zero
// because we're not incrementing the number of apiCallInProgress when the delete request begins.
export const DELETE_PLAYER_OPTIMISTIC = "DELETE_PLAYER_OPTIMISTIC";
export const LOAD_GAMES_SUCCESS = "LOAD_GAMES_SUCCESS";
export const CREATE_COACH_SUCCESS = "CREATE_COACH_SUCCESS";
export const UPDATE_COACH_SUCCESS = "UPDATE_COACH_SUCCESS";
