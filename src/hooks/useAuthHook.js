/**
 * auth hook to check and control authentication flow
 */
import React, { useState, useContext, createContext } from "react";
const authRequest = require("../network/authNetwork");
const authorizationContext = createContext();
function useAuth() {
  const [isAuth, setIsAuth] = useState(
    localStorage.getItem("id") ? true : false
  );
  const [jwt, setJwt] = useState(localStorage.getItem("id"));

  const addData = (jwt) => {
    // console.log("login", jwt.token);
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
    //console.log(storage);
    if (storage.length > 5) {
      setJwt(storage);
      setIsAuth(true);
    }
  };

  const errorHandler = async (error) => {
    //console.log(error);
    let reload = false;
    if (error.status === 401) {
      const response = await authRequest.getRefreshToken();
      //console.log("errorHndler", response);
      if (response.statusCode === 0) {
        addData(response);

        return true;
      } else {
        alert("there is no token");
      }
    }
    if (error.status === 403) {
      logout();
    }
    return reload;
  };

  const getToken = () => {
    return localStorage.getItem("id");
  };
  return { jwt, isAuth, addData, logout, initialize, errorHandler, getToken };
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
