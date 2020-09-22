import axios from "axios";

const AUTH_TOKEN = "9189f9c0-e5cd-4fcf-b8fd-ae864c284ec1";

axios.defaults.headers["Authorization"] = AUTH_TOKEN;
/*axios.defaults.headers.get["Access-Control-Allow-Origin"] =
  "https://media.digitalarkivet.no";
axios.defaults.headers.get["Content-Type"] =
  "application/x-www-form-urlencoded";*/

export default {
  get: axios.get,
};
