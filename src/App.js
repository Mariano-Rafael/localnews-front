import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home"; // Importa o componente Home
import { Footer } from "./components/Footer";
import { Header } from "./components/Header"; // Importe o Header
import { Navigation } from "./components/Navigation"; // Importe o Navigation

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />{" "}
          {/* Rota para a página inicial */}
          {/* Outras rotas aqui */}
        </Routes>
        <Footer /> {/* Renderize o Footer aqui */}
      </div>
    </Router>
  );
}

export default App;
