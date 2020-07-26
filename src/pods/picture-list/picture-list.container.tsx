import React from "react";
import { getPictureListPromise } from "../../api/mock-data";
import { useAppContext } from "../../common/context";
import {
  mapPictureListFromApiToVm,
  mapPictureInfoFromVmToContext,
} from "./picture-list.mapper";
import { PictureInfoVm } from "./picture-list.vm";
import { PictureList } from "./picture-list.component";

export const PictureListContainer: React.FC = () => {
  const {
    setVisibleCart,
    updateCartList,
    checkedProductList,
    setCheckedProductList,
  } = useAppContext();
  const [pictureList, setPictureList] = React.useState<PictureInfoVm[]>([]);

  const onLoadPictureList = () => {
    getPictureListPromise()
      .then((data) => mapPictureListFromApiToVm(data))
      .then((data) => setPictureList(data));
  };

  React.useEffect(() => {
    setVisibleCart(true);
    onLoadPictureList();
  }, []);

  const handleCheckedList = (product: PictureInfoVm): void => {
    const productEntity = mapPictureInfoFromVmToContext(product);
    updateCartList(productEntity);
  };

  return (
    <PictureList
      handleCheckedList={handleCheckedList}
      pictureList={pictureList}
    />
  );
};
