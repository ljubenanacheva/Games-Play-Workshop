import { useState, createContext, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { gameServiceFactory } from "../services/gameService.js";

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const navigate = useNavigate();
  const [games, setGames] = useState([]);

  const gameService = gameServiceFactory(); //auth.AccessToken

  useEffect(() => {
    gameService.getAll().then((result) => {
      setGames(result);
    });
  }, []);

  const onCreateGameSubmit = async (data) => {
    const newGame = await gameService.create(data);
    setGames((state) => [...state, newGame]);
    navigate("/catalog");
  };

  const onGameEditSubmit = async (values) => {
    const editedGame = await gameService.edit(values._id, values);
    setGames((state) =>
      state.map((x) => (x._id === values._id ? editedGame : x))
    );
    navigate(`/catalog/${values._id}`);
  };

  const contextValues = {
    games,
    onCreateGameSubmit,
    onGameEditSubmit,
  };

  return (
    <GameContext.Provider value={contextValues}>
      {children}
    </GameContext.Provider>
  );
};

export const useGameContext = () => {
  const context = useContext(GameContext);
  return context;
};
