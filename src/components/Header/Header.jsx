import React from "react";
import logo from "./logo-gray.png";

function Header() {
  return (
    <header className="bg-white w-full h-22 top-0">
      <div className="container mx-auto h-22 flex justify-center items-center">
        <img src={logo} alt="Logo" className="object-contain h-46 w-96" />
      </div>
    </header>
  );
}

export default Header;
