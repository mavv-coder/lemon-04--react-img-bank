import React from "react";
import { RouterComponent } from "./router";
import { ShoppingCart } from "./layout/Shopping-cart/shopping-cart.component";

export const App = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <RouterComponent />
      <ShoppingCart />
    </div>
  );
};
