import { React, useEffect, useState } from "react";
import useAuth from "../../hooks/useAuthHook";
import DevicesIndividual from "./DevicesIndividualChild";
import newtwork from "../../network/authNetwork";

function DevicesChild() {
  const { getToken,errorHandler } = useAuth();
  const [devices, setDevices] = useState([]);

  //for getting all token data
  async function getDevices() {
    try {
      const token = getToken();
      //console.log(token);
      const response = await newtwork.getDevices(token);
      //console.log(response);
      setDevices(response.data);
    } catch (error) {
      //console.log(error);
      const status = await errorHandler(error);
      if (status === true) {
        getDevices()
      }
    }
  }
  useEffect(() => {
    getDevices();
  }, []);

  return (
    <div>
      <h1>This is Devices</h1>
      <table>
        <thead>
          <tr>
            <th scope="col">Created At</th>
            <th scope="col">Device</th>
            <th scope="col">last login</th>
            <th scope="col">expiry</th>
          </tr>
        </thead>
        <tbody>
          {devices.map((dev) => {
            return (
              <DevicesIndividual
                key={dev.id}
                created_at={dev.created_at}
                device={dev.device}
                last_login={dev.last_login}
                expiry={dev.expiry}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default DevicesChild;
