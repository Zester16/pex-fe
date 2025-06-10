import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import accountLogo from "../../assets/account_logo.svg";
import menuLogo from "../../assets/menu.svg"
import closeLogo from "../../assets/close.svg"
import bookLogo from "../../assets/book.svg"
import newspaperLogo from "../../assets/newspaper.svg"
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

  function moveToNewspaper(){
navigate("/newspaper")
  }

  return (
    <div >
      <div  id={navOpen?"vertical-navbar-visible":"vertical-navbar-invincible"} >
            <img src={navOpen?closeLogo:menuLogo} onClick={setNavBar}/>
        <div className="nav-words" onClick={moveToNewspaper}>
          <img src={newspaperLogo} className="nav-indie-icon"/>Newspaper
        </div>
        <div className="nav-words">
        <img src={bookLogo} className="nav-indie-icon"/>Books
        </div>
      </div>
      <div id="navbar">
        <div>
          <img src={navOpen?closeLogo:menuLogo} onClick={setNavBar}/>
        </div>

      <div
        onMouseEnter={() => setHidden(true)}
        onMouseLeave={() => setHidden(false)}> 
        <img src={accountLogo} />
        {hidden ? (
          <div className="nav-words">
            <div onClick={redirectFunction}>user</div>
 
          </div>
        ) : null}
      </div>
    </div>
    </div>
  );
}

export default Navbar;
