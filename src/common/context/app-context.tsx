import React from "react";
import { Context, ProductInfoEntity } from "./app-context.model";

const AppContext = React.createContext<Context>(null);

export const AppContextProvider = (props) => {
  const [checkedProductList, setCheckedProductList] = React.useState<
    ProductInfoEntity[]
  >([]);
  const [visibleCart, setVisibleCart] = React.useState<boolean>(false);

  const toggleSelected = (list, id) =>
    list.map((el) => {
      if (el.id === id) el.selected = !el.selected;
      return el;
    });

  return (
    <AppContext.Provider
      value={{
        checkedProductList,
        setCheckedProductList,
        visibleCart,
        setVisibleCart,
        toggleSelected,
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
