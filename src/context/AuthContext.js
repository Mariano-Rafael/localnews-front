import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext({
  user: null,
  username: null,
  userId: null,
  login: () => {},
  logout: () => {},
});
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState(null);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedUsername = localStorage.getItem("username");
    const storedUserId = localStorage.getItem("userId");

    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("Erro ao carregar 'user' do localStorage:", error);
        localStorage.removeItem("user");
      }
    }
    if (storedUsername) {
      try {
        setUsername(JSON.parse(storedUsername));
      } catch (error) {
        console.error("Erro ao carregar 'username' do localStorage:", error);
        localStorage.removeItem("username");
      }
    }
    if (storedUserId) {
      try {
        setUserId(JSON.parse(storedUserId));
      } catch (error) {
        console.error("Erro ao carregar 'userId' do localStorage:", error);
        localStorage.removeItem("userId");
      }
    }
  }, []);

  const login = (userData) => {
    setUser(userData.data);
    setUsername(userData.data);
    setUserId(userData.metaData);
    localStorage.setItem("user", JSON.stringify(userData.data));
    localStorage.setItem("username", JSON.stringify(userData.data));
    localStorage.setItem("userId", JSON.stringify(userData.metaData));
  };

  const logout = () => {
    setUser(null);
    setUsername(null);
    setUserId(null);
    localStorage.removeItem("user");
    localStorage.removeItem("username");
    localStorage.removeItem("userId");
  };

  return (
    <AuthContext.Provider value={{ user, username, userId, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
