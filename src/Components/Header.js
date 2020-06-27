import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <nav className="header">
      <ul className="left">
        <li>
          <i class="las la-search"></i>
        </li>
        <li>Search</li>
      </ul>

      <ul className="right">
        <li className="auth">
          <span className="link">Menu</span>
          <NavLink to={"/create"} className="link b">
            <button> LOGIN </button>
          </NavLink>
          <NavLink to={"/login"} className="link b">
            <button> SIGNUP</button>
          </NavLink>
        </li>
        <li>User</li>
      </ul>
    </nav>
  );
};

export default Header;
