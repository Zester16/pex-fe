import { React } from "react";
import useAuth from "../../hooks/useAuthHook";
const network = require("../../network/authNetwork");
function Dashboard() {
  const { jwt, errorHandler } = useAuth();

  async function checkStatus() {
    try {
      const response = await network.test(jwt);
      //console.log(response);
    } catch (error) {
      alert(error);
      errorHandler(error);
    }
  }
  //console.log("this id dashboard");
  return (
    <div>
      This is Dashboard
      <button onClick={checkStatus}>Test</button>
    </div>
  );
}

export default Dashboard;
