import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LoginForm } from "../LoginForm";
import { RegisterForm } from "../RegisterForm";

function Navigation() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInUsername, setLoggedInUsername] = useState("");
  const [showRegisterModal, setShowRegisterModal] = useState(false); // Novo estado para o modal de registro

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setIsLoggedIn(true);
      setLoggedInUsername(storedUsername);
    }
  }, []);

  const handleLoginSuccess = (username) => {
    // Recebe o username como argumento
    setIsLoggedIn(true);
    setLoggedInUsername(username);
    localStorage.setItem("username", username); // Salva no localStorage
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setLoggedInUsername("");
    localStorage.removeItem("username");
  };

  return (
    <nav className="bg-gray-100 w-full p-2 h-11">
      <div className="container mx-auto flex justify-center">
        <ul className="flex space-x-4">
          <li>
            <Link
              to="/"
              className="transition duration-300 ease-in-out hover:bg-gray-300 px-2 py-1 rounded block hover:translate-y-[-2px]"
            >
              Início
            </Link>
          </li>
          <li>
            <a
              href="home"
              className="transition duration-300 ease-in-out hover:bg-gray-300 px-2 py-1 rounded block hover:translate-y-[-2px]"
            >
              Serviços
            </a>
          </li>
          <li>
            <a
              href="onibus"
              className="transition duration-300 ease-in-out hover:bg-gray-300 px-2 py-1 rounded block hover:translate-y-[-2px]"
            >
              Ônibus
            </a>
          </li>
          <li>
            <a
              href="clima"
              className="transition duration-300 ease-in-out hover:bg-gray-300 px-2 py-1 rounded block hover:translate-y-[-2px]"
            >
              Clima
            </a>
          </li>
          <li>
            <a
              href="sobre"
              className="transition duration-300 ease-in-out hover:bg-gray-300 px-2 py-1 rounded block hover:translate-y-[-2px]"
            >
              Sobre Nós
            </a>
          </li>
          <li>
            <a
              href="contato"
              className="transition duration-300 ease-in-out hover:bg-gray-300 px-2 py-1 rounded block hover:translate-y-[-2px]"
            >
              Contato
            </a>
          </li>
        </ul>
        <div className="absolute right-4 flex space-x-2 items-center">
          {" "}
          {/* Adicionado items-center aqui */}
          {isLoggedIn && loggedInUsername ? (
            <>
              <span className="text-black mr-2">
                Bem vindo, {loggedInUsername}!
              </span>
              <button
                className="bg-black hover:bg-white hover:text-black text-white px-2 h-7 border border-black shadow-2xl transition duration-700 ease-in-out"
                onClick={handleLogout}
              >
                Sair
              </button>
            </>
          ) : (
            <>
              <button
                className="text-sm bg-white hover:bg-black hover:text-white text-black px-2 h-7 border border-black shadow-2xl transition duration-700 ease-in-out"
                onClick={() => setShowLoginModal(true)}
              >
                Entrar
              </button>
              <button
                className="text-sm bg-black hover:bg-white hover:text-black text-white px-2 h-7 border border-black shadow-2xl transition duration-700 ease-in-out"
                onClick={() => setShowRegisterModal(true)}
              >
                Cadastre-se
              </button>
            </>
          )}
        </div>
        {showLoginModal && (
          <LoginForm
            onClose={() => setShowLoginModal(false)}
            onLoginSuccess={handleLoginSuccess}
          />
        )}
        {showRegisterModal && (
          <RegisterForm
            onClose={() => setShowRegisterModal(false)}
            onLoginSuccess={handleLoginSuccess}
          />
        )}{" "}
        {/* Passa onLoginSuccess */}
      </div>
    </nav>
  );
}

export default Navigation;
