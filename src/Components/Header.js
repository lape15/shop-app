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
        <li>
          <NavLink to={"/create"} className="link">
            Signup
          </NavLink>
        </li>
        <li>User</li>
      </ul>
    </nav>
  );
};

export default Header;
