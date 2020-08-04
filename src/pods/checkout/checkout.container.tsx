import React from "react";
import { useAppContext } from "../../core/context";
import { CheckoutComponent } from "./checkout.component";

export const CheckoutContainer: React.FC = () => {
  const { checkedProductList } = useAppContext();

  return <CheckoutComponent checkedProductList={checkedProductList} />;
};
