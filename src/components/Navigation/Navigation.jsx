import React from "react";
import { Link } from "react-router-dom"; // Se você for usar rotas

function Navigation() {
  return (
    <nav className="bg-slate-100 w-full p-2 h-11">
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
          {" "}
          {/* Botões de login/registrar */}
          <button className="bg-white hover:bg-black hover:text-white text-black px-2 h-7 border border-black shadow-2xl transition duration-700 ease-in-out">
            Entrar
          </button>
          <button className="bg-black hover:bg-white hover:text-black text-white px-2 h-7 border border-black shadow-2xl transition duration-700 ease-in-out">
            Registrar
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
