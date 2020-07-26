import React from "react";
import { getPictureListPromise } from "../../api/mock-data";
import { useAppContext } from "../../common/context";
import { mapPictureListFromApiToVm } from "./picture-list.mapper";
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

  //   const switchSelectedPictureProp = (id: string): void => {
  //     const newList = pictureList.map((el) => {
  //       if (el.id === id) el.selected = !el.selected;
  //       return el;
  //     });
  //     setPictureList(newList);
  //   };

  const handleCheckedList = (img): void => {
    // switchSelectedPictureProp(img.id);
    const newList = checkedProductList;
    console.log(img);
    if (newList.length > 0) {
      newList.includes(img)
        ? newList.splice(newList.indexOf(img), 1)
        : newList.push(img);
    } else {
      newList.push(img);
    }
    setCheckedProductList(newList);
    console.log(checkedProductList);
  };

  return <PictureList pictureList={pictureList} />;
};
