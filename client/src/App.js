import { CreateGame } from "./components/CreateGame/CreateGame.js";
import { Footer } from "./components/Footer/Footer.js";
import { Header } from "./components/Header/Header.js";
import { Home } from "./components/Home/Home.js";
import { Login } from "./components/Login/Login.js";
import { Register } from "./components/Register/Register.js";
import { Catalog } from "./components/Catalog/Catalog.js";

function App() {
  return (
    <div id="box">
      <Header />
      <main id="main-content">
        <Home />
        <Login />
        <Register />
        <CreateGame />
        <Catalog />
      </main>
      <Footer />
    </div>
  );
}

export default App;
