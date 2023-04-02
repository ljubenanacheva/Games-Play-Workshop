import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { authServiceFactory } from "../services/authService.js";
import { useLocalStorage } from "../hooks/useLocalStorage.js";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useLocalStorage("auth", {});
  const navigate = useNavigate();
  const authService = authServiceFactory(auth.accessToken);
  const onLoginSubmit = async (data) => {
    try {
      const result = await authService.login(data);
      setAuth(result);
      navigate("/catalog");
    } catch (err) {
      console.log(err);
    }
  };

  const onRegisterSubmit = async (values) => {
    const { confirmPassword, ...registerData } = values;

    if (confirmPassword !== registerData.password) {
      return;
    }
    try {
      const result = await authService.register(registerData);
      setAuth(result);
      navigate("/catalog");
    } catch (err) {
      console.log(err);
    }
  };

  const onLogout = async () => {
    // await authService.logout();
    setAuth({});
  };
  const context = {
    onLoginSubmit,
    onRegisterSubmit,
    onLogout,
    userId: auth._id,
    token: auth.accessToken,
    userEmail: auth.email,
    isAuthenticated: !!auth.accessToken,
  };

  return (
    <>
      <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
    </>
  );
};
