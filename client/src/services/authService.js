import { requestFactory } from "./requester.js";

const baseUrl = "http://localhost:3030/users";

export const authServiceFactory = (token) => {
  const request = requestFactory(token);
  return {
    login: (loginData) => {
      return request.post(`${baseUrl}/login`, loginData);
    },

    register: (registerData) => {
      return request.post(`${baseUrl}/register`, registerData);
    },

    logout: () => request.get(`${baseUrl}/logout`),
  };
};
