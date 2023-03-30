import * as requester from "./requester.js";

const baseUrl = "http://localhost:3030/jsonstore/comments";

export const create = async (data) => {
  const result = await requester.post(baseUrl, data);
  return result;
};
