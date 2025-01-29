import React from "react";

function Footer() {
  return (
    <footer className="bg-blacklogo text-white p-1 text-center">
      <p>
        &copy; {new Date().getFullYear()} Tatu News - Todos os direitos
        reservados.
      </p>
    </footer>
  );
}

export default Footer;
