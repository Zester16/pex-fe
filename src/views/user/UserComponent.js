import React from "react";
import useAuth from "../../hooks/useAuthHook";
import DevicesChild from "./DevicesChild";

//**
// this is user Component page which renders all user related details
//  */
function UserComponent() {
  const { logout } = useAuth();

  function logOutUser() {
    try {
      alert("logout");
      logout();
    } catch (error) {
      alert(error);
    }
  }
  return (
    <div>
      <h1>This is User</h1>
      <button onClick={logOutUser}>Log Out</button>
      <DevicesChild />
    </div>
  );
}

export default UserComponent;
