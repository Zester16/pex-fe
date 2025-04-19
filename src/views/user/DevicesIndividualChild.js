import React from "react";

function DevicesIndividual(props) {
  //for setting local date time
  function getLocalDate(inputUnixTime) {
    const localTime = new Date(inputUnixTime * 1000);

    return localTime.toLocaleDateString();
  }
  function getLocalTime(inputUnixTime) {
    const localTime = new Date(inputUnixTime * 1000);

    return (
      localTime.toLocaleDateString() + " " + localTime.toLocaleTimeString()
    );
  }
  return (
    <tr>
      <td>{getLocalTime(props.created_at)}</td>
      <td>{props.device}</td>
      <td>{getLocalTime(props.last_login)}</td>
      <td>{getLocalTime(props.expiry)}</td>
    </tr>
  );
}

export default DevicesIndividual;
