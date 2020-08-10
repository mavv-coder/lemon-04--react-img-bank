import React from "react";
import { useAppContext } from "../../../core/context";
import { NavbarComponent } from "./navbar.component";

export const NavbarContainer: React.FC = () => {
  const { setVisibleCart, visibleCart } = useAppContext();

  return (
    <NavbarComponent
      setVisibleCart={setVisibleCart}
      visibleCart={visibleCart}
    />
  );
};
