import React from "react";
import { Context, ProductInfoEntity } from "./app-context.model";

const AppContext = React.createContext<Context>(null);

export const AppContextProvider = (props) => {
  const [checkedProductList, setCheckedProductList] = React.useState<
    ProductInfoEntity[]
  >([]);
  const [visibleCart, setVisibleCart] = React.useState<boolean>(false);

  return (
    <AppContext.Provider
      value={{
        checkedProductList,
        setCheckedProductList,
        visibleCart,
        setVisibleCart,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = React.useContext(AppContext);
  return context;
};
