import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [isLogged, setIsLogged] = useState("Log in");
  return (
    <div className="header">
      <div className="logo">
        <img src={LOGO_URL} alt="Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
          <button className="login" onClick={() => isLogged === "Log in" ? setIsLogged("Log out") : setIsLogged("Log in")}>
            {isLogged}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
