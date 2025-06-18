import React, { useState } from 'react'
import {LOGO_URL} from '../utils/constants.js'

const Header = () => {
const [btnName, setBtnname]= useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button className="login" onClick={()=>{ setBtnname(btnName==="Login"? "Logout":"Login")}}>{btnName}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;