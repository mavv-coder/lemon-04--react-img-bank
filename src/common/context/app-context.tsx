import React from "react";
import Context from "./app-context.model";

const AppContext = React.createContext<Context>(null);

export const AppContextProvider = (props) => {
  const [checkedIdList, setCheckedIdList] = React.useState<string[]>([]);

  return (
    <AppContext.Provider value={{ checkedIdList, setCheckedIdList }}>
      {props.children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = React.useContext(AppContext);
  return context;
};
