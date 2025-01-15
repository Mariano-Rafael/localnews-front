import React from "react";
import logo from "./logo.png"; // Importe sua imagem

function Header() {
  return (
    <header className="bg-black w-full h-20 top-0">
      {" "}
      {/* Estilos do cabeçalho */}
      <div className="container mx-auto h-20 flex justify-center items-center">
        {" "}
        {/* Container centralizado */}
        <img src={logo} alt="Logo" className="object-contain h-48 w-96" />{" "}
        {/* Imagem centralizada */}
      </div>
    </header>
  );
}

export default Header;
