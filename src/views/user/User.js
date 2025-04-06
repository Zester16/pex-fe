import React from "react";
import useAuth from "../../hooks/useAuthHook";
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
    </div>
  );
}

export default UserComponent;
