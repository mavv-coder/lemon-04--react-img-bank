import React from "react";
import { Context, ProductInfoEntity } from "./app-context.model";

const AppContext = React.createContext<Context>(null);

export const AppContextProvider = (props) => {
  const [visibleCart, setVisibleCart] = React.useState<boolean>(false);
  const [checkedProductList, setCheckedProductList] = React.useState<
    ProductInfoEntity[]
  >([]);

  const checkIsInCart = (product: ProductInfoEntity): boolean =>
    checkedProductList.findIndex((el) => el.id === product.id) !== -1;

  const toggleProductFromCart = (
    product: ProductInfoEntity,
    isInCart: boolean
  ): ProductInfoEntity[] =>
    isInCart
      ? checkedProductList.filter((el) => el.id !== product.id)
      : [...checkedProductList, product];

  const updateCartList = (product: ProductInfoEntity): void => {
    const isInCart = checkIsInCart(product);
    const newProductList = toggleProductFromCart(product, isInCart);
    setCheckedProductList(newProductList);
  };

  return (
    <AppContext.Provider
      value={{
        checkedProductList,
        setCheckedProductList,
        visibleCart,
        setVisibleCart,
        updateCartList,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): Context => {
  const context = React.useContext(AppContext);
  return context;
};
