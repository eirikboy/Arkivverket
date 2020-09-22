import http from "./httpService";
import axios from "axios";

const API = "https://media.digitalarkivet.no/api/v1/db/browse?tags%5B%5D=373";

export function getSpringRelase() {
  /*return http.get(`${API}`, {
    mode: "no-cors",
    headers: { "Access-Control-Allow-Origin": "*" },
  });*/
  axios.defaults.baseURL = "https://media.digitalarkivet.no";
  return axios(API, {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  });
}
