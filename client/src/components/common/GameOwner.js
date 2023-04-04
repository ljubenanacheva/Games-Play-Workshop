import { useParams, Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { useGameContext } from "../../contexts/GameContext.js";
import { AuthContext } from "../../contexts/AuthContext.js";

export const GameOwner = ({ children }) => {
  const { getGame } = useGameContext();
  const { userId } = useContext(AuthContext);
  const { gameId } = useParams();

  const currentGame = getGame(gameId);

  if (currentGame && currentGame._ownerId !== userId) {
    return <Navigate to={`/catalog/${gameId}`} replace />;
  }
  return children ? children : <Outlet />;
};
