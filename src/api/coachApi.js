import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/coaches/";

export function getCoaches() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}

export function saveCoach(coach) {
  return fetch(baseUrl + (coach.id || ""), {
    method: coach.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify(coach)
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteCoach(coachId) {
  return fetch(baseUrl + coachId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
