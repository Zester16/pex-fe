import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import accountLogo from "../../assets/account_logo.svg";
import menuLogo from "../../assets/menu.svg"
import closeLogo from "../../assets/close.svg"
import  "../navbar/navbar.css"
function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [navOpen,setNavOpen]=useState(false);

  const navigate = useNavigate();
  function redirectFunction() {
    setHidden(false);
    navigate("/user");
  }

  function setNavBar(){
    const status = navOpen
    setNavOpen(!status)
  }

  return (
    <div id="navbar">
     <div>
      <img src={navOpen?closeLogo:menuLogo} onClick={setNavBar}/>
      <div  id={navOpen?"vertical-navbar-visibile":"vertical-navbar-invincible"} className="nav-words">
        <div>
          Newspaper
        </div>

      </div>
</div>
      <div
        onMouseEnter={() => setHidden(true)}
        onMouseLeave={() => setHidden(false)}
      >
        <img src={accountLogo} />
        {hidden ? (
          <div className="nav-words">
            <div onClick={redirectFunction}>user</div>
            <div>devices</div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Navbar;
