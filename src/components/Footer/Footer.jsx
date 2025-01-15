import React from "react";

function Footer() {
  return (
    <footer className="bg-black text-white p-1 text-center">
      <p>
        &copy; {new Date().getFullYear()} Portal Tatu - Todos os direitos
        reservados.
      </p>
    </footer>
  );
}

export default Footer;
