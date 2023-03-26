function App() {
  return (
    <div id="box">
      {/* <!-- Main Content --> */}

      {/* <!-- Login Page ( Only htmlfor Guest users ) --> */}

      {/* <!-- Register Page ( Only htmlfor Guest users ) --> */}

      {/* <!-- Create Page ( Only htmlfor logged-in users ) --> */}

      {/* <!-- Edit Page ( Only htmlfor the creator )--> */}
      <section id="edit-page" className="auth">
        <htmlform id="edit">
          <div className="container">
            <h1>Edit Game</h1>
            <label htmlFor="leg-title">Legendary title:</label>
            <input type="text" id="title" name="title" defaultValue="" />

            <label htmlFor="category">Category:</label>
            <input type="text" id="category" name="category" defaultValue="" />

            <label htmlFor="levels">MaxLevel:</label>
            <input
              type="number"
              id="maxLevel"
              name="maxLevel"
              min="1"
              defaultValue=""
            />

            <label htmlFor="game-img">Image:</label>
            <input type="text" id="imageUrl" name="imageUrl" defaultValue="" />

            <label htmlFor="summary">Summary:</label>
            <textarea name="summary" id="summary"></textarea>
            <input className="btn submit" type="submit" value="Edit Game" />
          </div>
        </htmlform>
      </section>

      {/* <!--Details Page--> */}

      {/* <!-- Catalogue --> */}
    </div>
  );
}

export default App;
