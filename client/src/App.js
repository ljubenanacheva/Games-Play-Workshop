import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import { gameServiceFactory } from "./services/gameService.js";
import { AuthProvider } from "./contexts/AuthContext.js";

import { CreateGame } from "./components/CreateGame/CreateGame.js";
import { Footer } from "./components/Footer/Footer.js";
import { Header } from "./components/Header/Header.js";
import { Home } from "./components/Home/Home.js";
import { Login } from "./components/Login/Login.js";
import { Register } from "./components/Register/Register.js";
import { Catalog } from "./components/Catalog/Catalog.js";
import { GameDetails } from "./components/GameDetails/GameDetails.js";
import { Logout } from "./components/Logout/Logout.js";
import { EditGame } from "./components/EditGame/EditGame.js";
import { useService } from "./hooks/useService.js";

function App() {
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

  return (
    <AuthProvider>
      <div id="box">
        <Header />
        <main id="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/logout" element={<Logout />} />
            <Route
              path="/create-game"
              element={<CreateGame onCreateGameSubmit={onCreateGameSubmit} />}
            />
            <Route path="/catalog" element={<Catalog games={games} />} />
            <Route path="/catalog/:gameId" element={<GameDetails />} />
            <Route
              path="/catalog/:gameId/edit"
              element={<EditGame onGameEditSubmit={onGameEditSubmit} />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
