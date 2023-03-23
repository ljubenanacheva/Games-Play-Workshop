import { Footer } from "./components/Footer/Footer.js";
import { Header } from "./components/Header/Header.js";
import { Home } from "./components/Home/Home.js";
import { Login } from "./components/Login/Login.js";

function App() {
  return (
    <div id="box">
      <Header />
      <main id="main-content">
        <Home />
        <Login />
      </main>
      <Footer />
    </div>
  );
}

export default App;
