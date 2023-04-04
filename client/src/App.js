import { Routes, Route } from "react-router-dom";

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
import { RouteGuard } from "./components/common/RouteGuard.js";
import { GameProvider } from "./contexts/GameContext.js";

function App() {
  return (
    <AuthProvider>
      <GameProvider>
        <div id="box">
          <Header />
          <main id="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />

              <Route element={<RouteGuard />}>
                <Route path="/create-game" element={<CreateGame />} />
                <Route path="/catalog/:gameId/edit" element={<EditGame />} />
                <Route path="/logout" element={<Logout />} />
              </Route>

              <Route path="/catalog" element={<Catalog />} />
              <Route path="/catalog/:gameId" element={<GameDetails />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </GameProvider>
    </AuthProvider>
  );
}

export default App;
