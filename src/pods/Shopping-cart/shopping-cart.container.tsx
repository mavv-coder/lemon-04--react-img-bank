import React from "react";
import { useAppContext } from "../../core/context";
import { ShoppingCartComponent } from "./shopping-cart.component";

export const ShoppingCartContainer: React.FC = () => {
  const {
    checkedProductList,
    setCheckedProductList,
    updateCartList,
  } = useAppContext();

  return (
    <ShoppingCartComponent
      updateCartList={updateCartList}
      checkedProductList={checkedProductList}
      setCheckedProductList={setCheckedProductList}
    />
  );
};
