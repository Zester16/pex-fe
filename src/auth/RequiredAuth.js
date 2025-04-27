import React from "react";
import useAuth from "../hooks/useAuthHook";
import Navbar from "../views/navbar/Navbar";
import { Navigate } from "react-router-dom";

/** this encapulates */

export default function RequiredAuth({ children }) {
  const { isAuth, jwt } = useAuth();
  //console.log("jwt-required-auth", jwt);
  console.log("jwt-required-auth", isAuth);
  return jwt !== undefined && isAuth ? (
    <div>
      {<Navbar />}
      {children}
    </div>
  ) : (
    <Navigate to={"/login"} />
  );
}
