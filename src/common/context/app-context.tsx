import { getPictureListPromise } from "../../api/mock-data";
import React from "react";
import { mapPictureListFromApiToVm } from "../../pods/picture-list/picture-list.mapper";
import { Context } from "./app-context.model";
import { PictureInfoVm } from "../../pods/picture-list";

const AppContext = React.createContext<Context>(null);

export const AppContextProvider = (props) => {
  const [checkedIdList, setCheckedIdList] = React.useState<string[]>([]);
  const [pictureList, setPictureList] = React.useState<PictureInfoVm[]>([]);
  const [visibleCart, setVisibleCart] = React.useState<boolean>(false);

  const onLoadPictureList = () => {
    getPictureListPromise()
      .then((data) => mapPictureListFromApiToVm(data))
      .then((data) => setPictureList(data));
  };

  React.useEffect(() => {
    onLoadPictureList();
  }, []);

  return (
    <AppContext.Provider
      value={{
        checkedIdList,
        setCheckedIdList,
        pictureList,
        setPictureList,
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
