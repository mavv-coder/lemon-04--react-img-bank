import { getPictureListPromise } from "../../api/mock-data";
import React from "react";
import { mapPictureListFromApiToVm } from "./picture-list.mapper";
import { Context, PictureInfoVm } from "./app-context.models";

const AppContext = React.createContext<Context>(null);

export const AppContextProvider = (props) => {
  const [checkedIdList, setCheckedIdList] = React.useState<string[]>([]);
  const [pictureList, setPictureList] = React.useState<PictureInfoVm[]>([]);

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
      value={{ checkedIdList, setCheckedIdList, pictureList, setPictureList }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = React.useContext(AppContext);
  return context;
};
