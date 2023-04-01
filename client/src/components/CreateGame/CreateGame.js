import { useForm } from "../../hooks/useForm.js";

export const CreateGame = ({ onCreateGameSubmit }) => {
  const { values, changeHadler, onSubmit } = useForm(
    {
      title: "",
      category: "",
      maxLevel: "",
      imageUrl: "",
      summary: "",
    },
    onCreateGameSubmit
  );

  return (
    <section id="create-page" className="auth">
      <form id="create" method="POST" onSubmit={onSubmit}>
        <div className="container">
          <h1>Create Game</h1>
          <label htmlFor="leg-title">Legendary title:</label>
          <input
            value={values.title}
            onChange={changeHadler}
            type="text"
            id="title"
            name="title"
            placeholder="Enter game title..."
          />

          <label htmlFor="category">Category:</label>
          <input
            value={values.category}
            onChange={changeHadler}
            type="text"
            id="category"
            name="category"
            placeholder="Enter game category..."
          />

          <label htmlFor="levels">MaxLevel:</label>
          <input
            value={values.maxLevel}
            onChange={changeHadler}
            type="number"
            id="maxLevel"
            name="maxLevel"
            min="1"
            placeholder="1"
          />

          <label htmlFor="game-img">Image:</label>
          <input
            value={values.imageUrl}
            onChange={changeHadler}
            type="text"
            id="imageUrl"
            name="imageUrl"
            placeholder="Upload a photo..."
          />

          <label htmlFor="summary">Summary:</label>
          <textarea
            name="summary"
            id="summary"
            value={values.summary}
            onChange={changeHadler}
          ></textarea>
          <input className="btn submit" type="submit" value="Create Game" />
        </div>
      </form>
    </section>
  );
};
