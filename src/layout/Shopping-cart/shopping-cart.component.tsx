import React from "react";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

import { useAppContext } from "../../common/context";

export const ShoppingCart: React.FC = () => {
  const {
    checkedIdList,
    setCheckedIdList,
    pictureList,
    setPictureList,
  } = useAppContext();

  return (
    <div style={{ width: "600px" }}>
      <ShoppingCartOutlinedIcon style={{ fontSize: "50px" }} />
      <span>Cart</span>

      {pictureList.map((el) => (
        <div key={el.id}>{!el.selected && el.title}</div>
      ))}

      <DeleteForeverIcon
        style={{ fontSize: "50px" }}
        onClick={() => console.log("delete")}
      />
    </div>
  );
};
