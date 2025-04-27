import { React, useEffect } from "react";
import useAuth from "../../hooks/useAuthHook";
const network = require("../../network/authNetwork");
function Dashboard() {
  const { errorHandler, getToken } = useAuth();

  async function checkStatus() {
    try {
      const response = await network.test(getToken());
      console.log(response);
    } catch (error) {
      //alert(JSON.stringify(error));
      const status = await errorHandler(error);
      if (status === true) {
        checkStatus();
      }
    }
  }
  return (
    <div>
      This is Dashboard
      <button onClick={checkStatus}>Test</button>
    </div>
  );
}

export default Dashboard;
