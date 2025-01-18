import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Navigation } from "./components/Navigation";
import { Horarios } from "./pages/Horarios"; // Importa com chaves
import { Clima } from "./pages/Clima"; // Importa com chaves

function App() {
  return (
    <Router>
      <div className="App flex flex-col min-h-screen">
        <Header />
        <Navigation />
        <main className="main-content flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/clima" element={<Clima />} />
            <Route path="/horarios" element={<Horarios />} />{" "}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
