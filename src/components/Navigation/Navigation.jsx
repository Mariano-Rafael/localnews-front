/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom"; // Se você for usar rotas
import { LoginForm } from "../LoginForm";

function Navigation() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Novo estado para controlar o login

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    // Aqui você pode adicionar lógica adicional após o login, como salvar o token no localStorage
    console.log("Login realizado com sucesso no Navigation.");
  };

  return (
    <nav className="bg-gray-100 w-full p-2 h-11">
      {" "}
      {/* Estilos do menu de navegação */}
      <div className="container mx-auto flex justify-center">
        {" "}
        {/* Container e layout flexível */}
        <ul className="flex space-x-4">
          {" "}
          {/* Lista de tópicos */}
          <li>
            <Link
              to="/"
              className="transition duration-300 ease-in-out hover:bg-gray-300 px-2 py-1 rounded block hover:translate-y-[-2px]"
            >
              Início
            </Link>
          </li>{" "}
          {/* Use Link se estiver usando rotas */}
          <li>
            <a
              href="home"
              className="transition duration-300 ease-in-out hover:bg-gray-300 px-2 py-1 rounded block hover:translate-y-[-2px]"
            >
              Serviços
            </a>
          </li>{" "}
          {/* Use <a> se não estiver usando rotas */}
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
        <div className="absolute right-4 flex space-x-2">
          {!isLoggedIn ? ( // Renderiza os botões de login/registrar ou mensagem de boas vindas
            <>
              <button
                className="bg-white hover:bg-black hover:text-white text-black px-2 h-7 border border-black shadow-2xl transition duration-700 ease-in-out"
                onClick={() => setShowLoginModal(true)}
              >
                Entrar
              </button>
              <button className="bg-black hover:bg-white hover:text-black text-white px-2 h-7 border border-black shadow-2xl transition duration-700 ease-in-out">
                Registrar
              </button>
            </>
          ) : (
            <span className="text-black">Bem vindo!</span> // Mensagem de boas vindas
          )}
        </div>
        {showLoginModal && (
          <LoginForm
            onClose={() => setShowLoginModal(false)}
            onLoginSuccess={handleLoginSuccess}
          />
        )}{" "}
        {/* Renderiza o modal se showLoginModal for true */}
      </div>
    </nav>
  );
}

export default Navigation;
