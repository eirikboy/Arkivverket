import http from "./httpService";

export function getSpringRelease(page) {
  return http.get(`http://localhost:3900/data/${page}`);
}
