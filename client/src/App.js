import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import * as gameService from "./services/gameService.js";
import { AuthContext } from "./contexts/AuthContext.js";
import * as authService from "./services/authService.js";

import { CreateGame } from "./components/CreateGame/CreateGame.js";
import { Footer } from "./components/Footer/Footer.js";
import { Header } from "./components/Header/Header.js";
import { Home } from "./components/Home/Home.js";
import { Login } from "./components/Login/Login.js";
import { Register } from "./components/Register/Register.js";
import { Catalog } from "./components/Catalog/Catalog.js";
import { GameDetails } from "./components/GameDetails/GameDetails.js";

function App() {
  const navigate = useNavigate();
  const [games, setGames] = useState([]);
  const [auth, setAuth] = useState();

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

  const onLoginSubmit = async (data) => {
    try {
      const result = await authService.login(data);
      setAuth(result);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AuthContext.Provider value={{ onLoginSubmit }}>
      <div id="box">
        <Header />
        <main id="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/create-game"
              element={<CreateGame onCreateGameSubmit={onCreateGameSubmit} />}
            />
            <Route path="/catalog" element={<Catalog games={games} />} />
            <Route path="/catalog/:gameId" element={<GameDetails />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
