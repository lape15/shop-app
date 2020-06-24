import React from "react";
// import { ReactComponent as ProfilePic } from "../assets/result.svg";
import Profile from "../assets/profile-icon.png";
const Nav = () => {
  return (
    <div className="nav">
      <div className="inner">
        <div className="image">
          <img src={Profile} alt="profile" className="profile-img" />
          <span>Hello User</span>
        </div>
        <div className="menu">
          <span className="user">MENU</span>
          <div className="menu-item">
            <i class="las la-history"></i>
            <span>Order History</span>
          </div>
          <div className="menu-item">
            <i class="las la-cart-arrow-down"></i>
            <span>Cart</span>
          </div>
          <div className="menu-item">
            <i class="las la-user"></i>
            <span>User account</span>
          </div>
        </div>

        <div className="menu">
          <span className="user">SETTINGS</span>
          <div className="menu-item">
            <i class="las la-sign-out-alt"></i>
            <span>Log out</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
