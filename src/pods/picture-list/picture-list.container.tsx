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
  const { setVisibleCart } = useAppContext();
  const [pictureList, setPictureList] = React.useState<PictureInfoVm[]>([]);
  const { checkedProductList, setCheckedProductList } = useAppContext();

  const onLoadPictureList = () => {
    getPictureListPromise()
      .then((data) => mapPictureListFromApiToVm(data))
      .then((data) => setPictureList(data));
  };

  React.useEffect(() => {
    setVisibleCart(true);
    onLoadPictureList();
  }, []);

  // const switchSelectedPictureProp = (id: string): void => {
  //   const newList = pictureList.map((el) => {
  //     if (el.id === id) el.selected = !el.selected;
  //     return el;
  //   });
  //   setPictureList(newList);
  // };

  const handleCheckedList = (img: PictureInfoVm): void => {
    // switchSelectedPictureProp(img.id);
    const contextModelImg = mapPictureInfoFromVmToContext(img);
    const newList = checkedProductList.map((el) => el);
    if (newList.length > 0) {
      newList.includes(contextModelImg)
        ? console.log("Lo incluye")
        : console.log("NO Lo incluye");
    } else {
      newList.push(contextModelImg);
    }
    setCheckedProductList(newList);
    console.log(checkedProductList);
  };

  return (
    <PictureList
      handleCheckedList={handleCheckedList}
      pictureList={pictureList}
    />
  );
};
