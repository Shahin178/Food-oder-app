import React, { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import UserContext from "../utils/UserContext.js";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnname] = useState("Login");
  const { loggedInUser } = useContext(UserContext);
  const onlineStatus = useOnlineStatus();
  const cartItems = useSelector((store) => store.cart.items);
  console.log("cartItems in Header:", cartItems);
  

  return (
    <header className="flex justify-between items-center px-8 py-0 bg-white shadow-md border-b border-gray-100">
      <div className="flex items-center">
        <img className="w-25 h-24" src={LOGO_URL} alt="Logo" />
      </div>
      <nav className="nav-items">
        <ul className="flex items-center gap-8 text-lg font-medium">
          <li className="text-gray-600">
            Online Status:{" "}
            <span className={onlineStatus ? "text-green-500" : "text-red-500"}>
              {onlineStatus ? "✅" : "🔴"}
            </span>
          </li>
          <li>
            <Link to="/" className="hover:text-blue-600 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-600 transition-colors">
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-blue-600 transition-colors"
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="/cart" className="hover:text-blue-600 transition-colors">
              Cart - ({cartItems.length})
            </Link>
          </li>
          <li>
            <button
              className="ml-4 px-5 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition-colors border border-blue-500"
              onClick={() =>
                setBtnname(btnName === "Login" ? "Logout" : "Login")
              }
            >
              {btnName}
            </button>
          </li>
          <li>
            <Link
              to="/"
              className="hover:text-blue-600 transition-colors font-bold"
            >
              {loggedInUser}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
