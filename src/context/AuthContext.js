import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userType, setUserType] = useState(null); // "user", "business", "admin"
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Simulate fetching auth state from localStorage/session (for demo)
  useEffect(() => {
    const storedUserType = localStorage.getItem("userType");
    const token = localStorage.getItem("token");
    if (storedUserType && token) {
      setUserType(storedUserType);
      setIsAuthenticated(true);
    }
  }, []);

  const login = (type, token) => {
    setUserType(type);
    setIsAuthenticated(true);
    localStorage.setItem("userType", type);
    localStorage.setItem("token", token);
  };

  const logout = () => {
    setUserType(null);
    setIsAuthenticated(false);
    localStorage.removeItem("userType");
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ userType, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
