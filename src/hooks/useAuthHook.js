/**
 * auth hook to check and control authentication flow
 */
import React, { useState, useContext, createContext } from "react";
const authRequest = require("../network/authNetwork");
const authorizationContext = createContext();
function useAuth() {
  const [isAuth, setIsAuth] = useState(false);
  const [jwt, setJwt] = useState(localStorage.getItem("id"));

  const login = (jwt) => {
    localStorage.setItem("id", jwt.token);
    setJwt(jwt.token);
    setIsAuth(true);
  };
  const logout = () => {
    setJwt(undefined);
    setIsAuth(false);
    localStorage.removeItem("id");
  };
  //initialize route
  const initialize = () => {
    const storage = localStorage.getItem("id");
    console.log(storage);
    if (storage.length > 5) {
      setJwt(storage);
      setIsAuth(true);
    }
  };

  const errorHandler = (error) => {
    if (error.statusCode === 401) {
      const response = authRequest.getRefreshToken();
      if (response.statusCode === 0) {
        login(response);
      } else {
        alert("there is no token");
      }
    }
    if (error.statusCode === 403) {
      logout();
    }
  };

  return { jwt, isAuth, login, logout, initialize, errorHandler };
}

export function AuthorizationContext({ children }) {
  const auth = useAuth();
  return (
    <authorizationContext.Provider value={auth}>
      {children}
    </authorizationContext.Provider>
  );
}

export default function AuthConsumer() {
  return useContext(authorizationContext);
}
