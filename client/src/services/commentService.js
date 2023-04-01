import { requestFactory } from "./requester.js";

const baseUrl = "http://localhost:3030/jsonstore/comments";

export const commentFactory = (token) => {
  const request = requestFactory(token);

  const create = async (data) => {
    const result = await request.post(baseUrl, data);
    return result;
  };

  const getAll = async (gameId) => {
    const query = encodeURIComponent(`gameId="${gameId}"`);
    const result = await request.get(`${baseUrl}?where=${query}`);
    const comments = Object.values(result);
    return comments;
  };
  return {
    create,
    getAll,
  };
};
