import React, { useMemo, useState, createContext } from "react";
import { PictureInfoVm } from "../../pods/picture-list/img-list.vm";

const PictureListContext = createContext(null);

export const PictureListContextProvider = () => {
  const [pictureList, setPictureList] = useState<PictureInfoVm[]>([]);

  const value = useMemo(() => {
    return {
      pictureList,
      setPictureList,
    };
  }, [pictureList]);

  return <PictureListContext.Provider value={value} />;
};

export const usePictureListContext = () => {
  const context = React.createContext(PictureListContext);
  return context;
};
