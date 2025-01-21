/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef, useContext } from "react";

import { Link, useNavigate } from "react-router-dom";
import { LoginForm } from "../LoginForm";
import { RegisterForm } from "../RegisterForm";
import { AuthContext } from "../../context/AuthContext";

function Navigation() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInUsername, setLoggedInUsername] = useState("");
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const servicesRef = useRef(null);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  const { username, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    clearTimeout(timeoutId);
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    const id = setTimeout(() => {
      setIsServicesOpen(false);
    }, 50);
    setTimeoutId(id);
  };

  const handleClickOutside = (event) => {
    if (servicesRef.current && !servicesRef.current.contains(event.target)) {
      setIsServicesOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleBusClick = () => {
    navigate("/horarios");
  };

  useEffect(() => {
    setIsLoggedIn(!!username);
    setLoggedInUsername(username);
  }, [username]);

  /* const handleLoginSuccess = (username) => {
    setIsLoggedIn(true);
    setLoggedInUsername(username);
    localStorage.setItem("username", username);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setLoggedInUsername("");
    localStorage.removeItem("username");
  }; */

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

          <li
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="relative group"
          >
            <Link
              to="#"
              className="flex items-center nav-link transition duration-300 ease-in-out hover:bg-gray-300 px-2 py-1 rounded hover:translate-y-[-2px]"
            >
              Serviços
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 ml-1 transition-transform group-hover:rotate-180"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </Link>
            <ul
              className={`absolute left-0 max-w-24 mt-2 bg-white text-gray-800 shadow-lg w-48 z-10 
                            ${isServicesOpen ? "block" : "hidden"}`}
            >
              <li>
                <Link
                  to="/servicos"
                  className="block px-4 py-2 hover:bg-gray-100 nav-link"
                >
                  Enquetes
                </Link>
              </li>
              <li>
                <Link
                  to="/anuncios"
                  className="block px-4 py-2  hover:bg-gray-100 nav-link"
                >
                  Anúncios
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link
              to="/horarios"
              className="transition duration-300 ease-in-out hover:bg-gray-300 px-2 py-1 rounded block hover:translate-y-[-2px]"
            >
              Ônibus
            </Link>
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
            <Link
              to="/sobre"
              className="transition duration-300 ease-in-out hover:bg-gray-300 px-2 py-1 rounded block hover:translate-y-[-2px]"
            >
              Sobre Nós
            </Link>
          </li>
          <li>
            <Link
              to="/contatos"
              className="transition duration-300 ease-in-out hover:bg-gray-300 px-2 py-1 rounded block hover:translate-y-[-2px]"
            >
              Fale Conosco
            </Link>
          </li>
        </ul>
        <div className="absolute right-4 flex space-x-2 items-center">
          {" "}
          {isLoggedIn && loggedInUsername ? (
            <>
              <span className="text-black mr-2">Bem vindo, {username}!</span>
              <button
                className="bg-black hover:bg-white hover:text-black text-white px-2 h-7 border border-black shadow-2xl transition duration-700 ease-in-out"
                onClick={() => {
                  logout();
                  navigate("/");
                }}
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
          <LoginForm onClose={() => setShowLoginModal(false)} />
        )}
        {showRegisterModal && (
          <RegisterForm onClose={() => setShowRegisterModal(false)} />
        )}{" "}
      </div>
    </nav>
  );
}

export default Navigation;
