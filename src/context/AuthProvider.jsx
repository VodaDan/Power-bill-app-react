// src/context/AuthContext.jsx
import { createContext, useContext, useState, useEffect } from "react";
import { AuthContext } from "./auth-context";



  const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("email");
    return token && email ? { email, token } : null;
  });

  const login = ({token }) => {
    localStorage.setItem("token", token);
    const email = localStorage.getItem("email");
    setUser({ email, token });
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
