import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import * as gameService from "../../services/gameService.js";

export const GameDetails = () => {
  const { gameId } = useParams();
  const [game, setGame] = useState({});

  useEffect(() => {
    gameService.getOne(gameId).then((result) => {
      setGame(result);
    });
  }, [gameId]);

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

        {/* <!-- Bonus ( htmlfor Guests and Users ) --> */}
        <div className="details-comments">
          <h2>Comments:</h2>
          <ul>
            {/* <!-- list all comments htmlfor current game (If any) --> */}
            <li className="comment">
              <p>Content: I rate this one quite highly.</p>
            </li>
            <li className="comment">
              <p>Content: The best game.</p>
            </li>
          </ul>
          {/* <!-- Display paragraph: If there are no games in the database --> */}
          <p className="no-comment">No comments.</p>
        </div>

        {/* <!-- Edit/Delete buttons ( Only htmlfor creator of this game )  --> */}
        <div className="buttons">
          <a href="#" className="button">
            Edit
          </a>
          <a href="#" className="button">
            Delete
          </a>
        </div>
      </div>

      {/* <!-- Bonus --> */}
      {/* <!-- Add Comment ( Only htmlfor logged-in users, which is not creators of the current game ) --> */}
      <article className="create-comment">
        <label>Add new comment:</label>
        <htmlform className="htmlform">
          <textarea name="comment" placeholder="Comment......"></textarea>
          <input className="btn submit" type="submit" value="Add Comment" />
        </htmlform>
      </article>
    </section>
  );
};