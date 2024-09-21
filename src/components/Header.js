import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {

  const [isLogged, setIsLogged] = useState("Log in");

  // Reading the context data
  const { loggedInUser } = useContext(UserContext);

  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between shadow-lg bg-pink-100">
      <div className="logo w-56">
        <img src={LOGO_URL} alt="Logo" className="h-24" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-[2px] m-4">
          <li className="px-4">
            Online Status : {onlineStatus ? '🟢' : '🔴'}
          </li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact us</Link>
          </li>
          <li className="px-4">
            <Link to="/grossary">Grocery</Link>
          </li>
          <li className="px-4">Cart</li>
          <button className="px-4" onClick={() => isLogged === "Log in" ? setIsLogged("Log out") : setIsLogged("Log in")}>
            {isLogged}
          </button>
          <li>{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
