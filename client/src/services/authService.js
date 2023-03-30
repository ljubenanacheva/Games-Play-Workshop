import * as request from "./requester.js";

const baseUrl = "http://localhost:3030/users";

export const login = (loginData) => {
  return request.post(`${baseUrl}/login`, loginData);
};
