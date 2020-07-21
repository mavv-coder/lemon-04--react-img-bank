import React from "react";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { PictureInfoVm } from "../../pods/picture-list/img-list.vm";

import { getImgListPromise } from "../../api/mock-data";
import { useAppContext } from "../../common/context";

export const ShoppingCart: React.FC = () => {
  // const { setPictureList, pictureList } = usePictureListContext();
  return (
    <div style={{ width: "600px" }}>
      <ShoppingCartOutlinedIcon style={{ fontSize: "50px" }} />
      <span>Cart</span>
      <DeleteForeverIcon
        style={{ fontSize: "50px" }}
        onClick={() => console.log("delete")}
      />
    </div>
  );
};
