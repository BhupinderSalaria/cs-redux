import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/players/";

export function getplayers() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}

export function getplayerByid(id) {
  return fetch(baseUrl + "?id=" + id)
    .then(response => {
      if (!response.ok) throw new Error("Network response was not ok.");
      return response.json().then(players => {
        if (players.length !== 1) throw new Error("player not found: " + id);
        return players[0]; // should only find one player for a given id, so return it.
      });
    })
    .catch(handleError);
}

export function saveplayer(player) {
  return fetch(baseUrl + (player.id || ""), {
    method: player.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      ...player,
      // Parse authorId to a number (in case it was sent as a string).
      authorId: parseInt(player.authorId, 10)
    })
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteplayer(playerId) {
  return fetch(baseUrl + playerId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
