import React from "react";
import Products from "./Pages/Products";
import Nav from "./Components/Nav";
import Header from "./Components/Header";
import Cart from "./Pages/Cart";
import { Route, Switch } from "react-router-dom";
import Signup from "./Pages/Auth/Signup";
const Routes = () => {
  return (
    <div className="routes">
      {" "}
      <Cart />
      <Header />
      <Nav />
      <Switch>
        <Route exact path="/" component={Products} />
        <Route exact path="/create" component={Signup} />
      </Switch>
    </div>
  );
};
export default Routes;
