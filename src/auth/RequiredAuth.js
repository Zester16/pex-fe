import React from "react";
import useAuth from "../hooks/useAuthHook";
import { Navigate } from "react-router-dom";

/** this encapulates */

export default function RequiredAuth({ children }) {
  const { isAuth, jwt, initialize } = useAuth();
  console.log("jwt-required-auth", jwt);
  console.log("jwt-required-auth", isAuth);
  return jwt !== undefined && isAuth ? children : <Navigate to={"/login"} />;
}
