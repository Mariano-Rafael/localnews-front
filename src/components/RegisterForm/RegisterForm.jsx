import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

function RegisterForm({ onClose, onLoginSuccess }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/users/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Usuário registrado com sucesso!");

        await new Promise((resolve) => setTimeout(resolve, 2000));

        const loginResponse = await fetch("http://localhost:8080/users/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        });

        const loginData = await loginResponse.json();

        if (data.status) {
          login(loginData);
          navigate("/");
          onClose();
        } else {
          setMessage(loginData.message || "Erro ao fazer login automático.");
        }
      } else {
        setMessage(data.message || "Erro ao registrar usuário.");
      }
    } catch (error) {
      setMessage("Erro ao conectar com o servidor.");
      console.error("Erro de registro:", error);
    }
  };

  return (
    <div
      className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
      onClick={onClose}
    >
      <div
        className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mt-3 text-center">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-black">
            <svg
              className="h-6 w-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
          </div>
          <h3 className="text-lg leading-6 font-medium text-black">
            <br></br>Informe seus dados:
          </h3>
          <div className="mt-2 px-7 py-1">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Usuário"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="border rounded w-full p-2 mb-2"
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border rounded w-full p-2 mb-2"
                required
              />
              <input
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border rounded w-full p-2 mb-2"
                required
              />
              <button
                type="submit"
                className="bg-black hover:bg-white text-white hover:text-black border border-black shadow-2xl transition duration-700 ease-in-out font-bold py-2 px-4 rounded w-full"
              >
                Cadastrar
              </button>
            </form>
            {message && <p className="text-black mt-2">{message}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
