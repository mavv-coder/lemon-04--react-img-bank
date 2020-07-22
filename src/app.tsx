import React from "react";
import { RouterComponent } from "./router";
import { ShoppingCart } from "./layout/Shopping-cart/shopping-cart.component";
import { useAppContext } from "./common/context";

export const App = () => {
  const { visibleCart } = useAppContext();
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <RouterComponent />
      {visibleCart && <ShoppingCart />}
    </div>
  );
};
