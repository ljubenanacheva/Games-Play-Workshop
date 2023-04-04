import { requestFactory } from "./requester.js";

const baseUrl = "http://localhost:3030/data/comments";

const request = requestFactory();

export const create = async (gameId, comment) => {
  const result = await request.post(baseUrl, { gameId, comment });
  return result;
};

export const getAll = async (gameId) => {
  const query = encodeURIComponent(`gameId="${gameId}"`);
  const relationQuery = encodeURIComponent(`author=_ownerId:users`);

  const result = await request.get(
    `${baseUrl}?where=${query}&load=${relationQuery}`
  );
  const comments = Object.values(result);
  return comments;
};
