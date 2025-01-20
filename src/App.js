import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Navigation } from "./components/Navigation";
import { Horarios } from "./pages/Horarios";
import { Clima } from "./pages/Clima";
import { Servicos } from "./pages/Servicos";
import { AuthProvider } from "./context/AuthContext";
import LoginForm from "./components/LoginForm/LoginForm";
import Poll from "./components/Poll/Poll";

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="App flex flex-col min-h-screen">
          <Header />
          <Navigation />
          <main className="main-content flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<LoginForm />} />
              <Route path="/poll/:id" element={<Poll />} />
              <Route path="/clima" element={<Clima />} />
              <Route path="/servicos" element={<Servicos />} />
              <Route path="/horarios" element={<Horarios />} />{" "}
            </Routes>
          </main>
          <Footer />
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
