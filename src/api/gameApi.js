import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/games/";

export function getGames() {
  //debugger;
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}
