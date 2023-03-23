import { Footer } from "./components/Footer/Footer.js";
import { Header } from "./components/Header/Header.js";
import { Home } from "./components/Home/Home.js";

function App() {
  return (
    <div id="box">
      <Header />
      <main id="main-content">
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
