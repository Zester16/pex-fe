import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import accountLogo from "../../assets/account_logo.svg";
function Navbar() {
  const [hidden, setHidden] = useState(false);

  const navigate = useNavigate();
  function redirectFunction() {
    setHidden(false);
    navigate("/user");
  }
  return (
    <div>
      <div
        onMouseEnter={() => setHidden(true)}
        onMouseLeave={() => setHidden(false)}
      >
        <img src={accountLogo} />
        {hidden ? (
          <div>
            <div onClick={redirectFunction}>user</div>
            <div>devices</div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Navbar;
