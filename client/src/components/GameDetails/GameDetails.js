import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

import { gameServiceFactory } from "../../services/gameService.js";
import * as commentService from "../../services/commentService.js";
import { useService } from "../../hooks/useService.js";
import { AuthContext } from "../../contexts/AuthContext.js";

import { AddComment } from "./AddComment/AddComment.js";

export const GameDetails = () => {
  const { userId, isAuthenticated } = useContext(AuthContext);
  const [comments, setComments] = useState([]);
  const { gameId } = useParams();
  const [game, setGame] = useState({});

  const gameService = useService(gameServiceFactory);
  const navigate = useNavigate();

  useEffect(() => {
    Promise.all([
      gameService.getOne(gameId),
      commentService.getAll(gameId),
    ]).then(([gameData, commentsData]) => {
      setGame({
        ...gameData,
        comments: commentsData,
      });
    });
  }, [gameId]);

  const onCommentSubmit = async (values) => {
    const result = await commentService.create(gameId, values.comment);

    //setUsername("");
    //setComment("");
  };

  const onDeleteClick = async () => {
    await gameService.delete(game._id);
    //TODO delete from state
    navigate("/catalog");
  };

  return (
    <section id="game-details">
      <h1>Game Details</h1>
      <div className="info-section">
        <div className="game-header">
          <img className="game-img" src={game.imageUrl} />
          <h1>{game.title}</h1>
          <span className="levels">MaxLevel: {game.maxLevel}</span>
          <p className="type">{game.category}</p>
        </div>

        <p className="text">{game.summary}</p>

        <div className="details-comments">
          <h2>Comments:</h2>
          <ul>
            {game.comments &&
              game.comments.map((x) => (
                <li key={x._id} className="comment">
                  <p>{x.comment}</p>
                </li>
              ))}
          </ul>
          {game.comments && game.comments.length === 0 && (
            <p className="no-comment">No comments.</p>
          )}
        </div>

        {/* <!-- Edit/Delete buttons ( Only htmlfor creator of this game )  --> */}
        {game._ownerId === userId && (
          <div className="buttons">
            <Link to={`/catalog/${game._id}/edit`} className="button">
              Edit
            </Link>
            <button className="button" onClick={onDeleteClick}>
              Delete
            </button>
          </div>
        )}
      </div>

      {isAuthenticated && <AddComment onCommentSubmit={onCommentSubmit} />}
    </section>
  );
};
