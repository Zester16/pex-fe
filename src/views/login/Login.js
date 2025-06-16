import { React, useState } from "react";
import useAuth from "../../hooks/useAuthHook";
import { useNavigate } from "react-router-dom";
const network = require("../../network/authNetwork");

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { addData } = useAuth();
  const navigate = useNavigate();
  function handleSubmit(evt) {
    evt.preventDefault();
    submitEvent();
  }
  async function submitEvent() {
    try {
      const response = await network.getLoginToken(username, password);
      //console.log("login-page-response", response);

      addData(response);
      navigate("/");
    } catch (err) {
      alert("some error happened, please try again")
    }
  }
  return (
    <div>
      <div>Login</div>
      <form onSubmit={handleSubmit}>
        <div>
          <div label="username">username</div>
          <input
            label="username"
            input={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            input={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
