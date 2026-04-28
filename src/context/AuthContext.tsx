"use client";
import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext<{ isAuthenticated: boolean; login: () => void; logout: () => void }>({ isAuthenticated: false, login: () => {}, logout: () => {} });

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => { setIsAuthenticated(document.cookie.includes('session=')); }, []);
  return <AuthContext.Provider value={{ isAuthenticated, login: () => setIsAuthenticated(true), logout: () => setIsAuthenticated(false) }}>{children}</AuthContext.Provider>;
};
export const useAuth = () => useContext(AuthContext);