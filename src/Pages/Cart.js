import React from "react";

const Cart = () => {
  return (
    <div className="cart">
      {" "}
      <ul className="left">
        <li className="far-left">
          <i class="las la-lock"></i>
        </li>
        <li className="far-right">
          <i class="lar la-bell"></i>
        </li>
      </ul>
    </div>
  );
};
export default Cart;
