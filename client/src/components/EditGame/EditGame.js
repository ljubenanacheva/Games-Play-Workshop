import { useParams } from "react-router-dom";
import { useEffect } from "react";

import { useForm } from "../../hooks/useForm.js";
import { useService } from "../../hooks/useService.js";
import { gameServiceFactory } from "../../services/gameService.js";
import { useGameContext } from "../../contexts/GameContext.js";

export const EditGame = () => {
  const { onGameEditSubmit } = useGameContext();
  const { gameId } = useParams();
  const gameService = useService(gameServiceFactory);
  const { values, changeHadler, onSubmit, changeValues } = useForm(
    {
      _id: "",
      title: "",
      category: "",
      maxLevel: "",
      imageUrl: "",
      summary: "",
    },
    onGameEditSubmit
  );
  useEffect(() => {
    gameService.getOne(gameId).then((result) => {
      changeValues(result);
    });
  }, [gameId]);

  return (
    <section id="edit-page" className="auth">
      <form id="edit" method="POST" onSubmit={onSubmit}>
        <div className="container">
          <h1>Edit Game</h1>
          <label htmlFor="leg-title">Legendary title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={values.title}
            onChange={changeHadler}
          />

          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            name="category"
            value={values.category}
            onChange={changeHadler}
          />

          <label htmlFor="levels">MaxLevel:</label>
          <input
            type="number"
            id="maxLevel"
            name="maxLevel"
            min="1"
            value={values.maxLevel}
            onChange={changeHadler}
          />

          <label htmlFor="game-img">Image:</label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            value={values.imageUrl}
            onChange={changeHadler}
          />

          <label htmlFor="summary">Summary:</label>
          <textarea
            name="summary"
            id="summary"
            value={values.summary}
            onChange={changeHadler}
          ></textarea>
          <input className="btn submit" type="submit" value="Edit Game" />
        </div>
      </form>
    </section>
  );
};
