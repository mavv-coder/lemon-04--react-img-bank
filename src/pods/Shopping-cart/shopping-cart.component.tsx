import React from "react";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

import { useAppContext } from "../../common/context";

export const ShoppingCart: React.FC = () => {
  const {
    checkedProductList,
    setCheckedProductList,
    // pictureList,
    // setPictureList,
  } = useAppContext();

  // const switchSelectedPictureProp = (id: string): void => {
  //   const newList = pictureList.map((el) => {
  //     if (el.id === id) el.selected = !el.selected;
  //     return el;
  //   });
  //   setPictureList(newList);
  // };

  const handleDeleteIcon = (id) => {
    // switchSelectedPictureProp(id);
    const newList = checkedProductList.filter((el) => {
      return el.id !== id;
    });

    // const newList = checkedProductList;

    // const index = newList.findIndex((el) => {
    //   return el.id === icon.id;
    // });
    // console.log(index);
    // newList.splice(index, 1);
    setCheckedProductList(newList);
    // console.log("delete");
  };

  return (
    <div style={{ width: "600px" }}>
      <ShoppingCartOutlinedIcon style={{ fontSize: "50px" }} />
      <span>Cart</span>

      {checkedProductList.length > 0 &&
        checkedProductList.map((el) => (
          <div key={el.id}>
            <img src={el.picUrl} style={{ width: 50 }} />
            <span>{el.title}</span>

            <DeleteForeverIcon
              style={{ fontSize: "30px" }}
              onClick={() => handleDeleteIcon(el.id)}
            />
          </div>
        ))}
    </div>
  );
};
