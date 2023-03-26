import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import * as gameService from "./services/gameService.js";

import { CreateGame } from "./components/CreateGame/CreateGame.js";
import { Footer } from "./components/Footer/Footer.js";
import { Header } from "./components/Header/Header.js";
import { Home } from "./components/Home/Home.js";
import { Login } from "./components/Login/Login.js";
import { Register } from "./components/Register/Register.js";
import { Catalog } from "./components/Catalog/Catalog.js";

function App() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    gameService.getAll().then((result) => {
      console.log(result);
      setGames(result);
    });
  }, []);

  return (
    <div id="box">
      <Header />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/create-game" element={<CreateGame />} />
          <Route path="/catalog" element={<Catalog games={games} />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
