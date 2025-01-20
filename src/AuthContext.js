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
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const login = (userData) => {
    setUser(userData);
    setUsername(userData.username);
    setUserId(userData.userId);
    localStorage.setItem("username", userData.username);
  };

  const logout = () => {
    setUser(null);
    setUsername(null);
    setUserId(null);
    localStorage.removeItem("username");
  };

  return (
    <AuthContext.Provider value={{ user, username, userId, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
