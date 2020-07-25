import React from "react";

import { useStyles } from "./picture-list.styles";
import { useAppContext } from "../../common/context";
// Material UI
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Box from "@material-ui/core/Box";

export const ImgList: React.FC = () => {
  const {
    checkedIdList,
    setCheckedIdList,
    pictureList,
    setPictureList,
  } = useAppContext();
  const [] = React.useState<[]>([]);
  const classes = useStyles();
  const { setVisibleCart } = useAppContext();

  React.useEffect(() => {
    setVisibleCart(true);
  }, []);

  const switchSelectedPictureProp = (id: string): void => {
    const newList = pictureList.map((el) => {
      if (el.id === id) el.selected = !el.selected;
      return el;
    });
    setPictureList(newList);
  };

  const handleCheckedList = (id: string): void => {
    const newList = checkedIdList;
    if (newList.length > 0) {
      newList.includes(id)
        ? newList.splice(newList.indexOf(id), 1)
        : newList.push(id);
    } else {
      newList.push(id);
    }
    setCheckedIdList(newList);
    switchSelectedPictureProp(id);
    console.log(pictureList);
  };

  return (
    // <div className={`${classes.root}, ${classes.flexContainer}`}>
    <div className={`${classes.root}`}>
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="space-between"
        p={1}
        m={1}
        bgcolor="red"
        css={{ maxWidth: 300 }}
      >
        {pictureList.map((img) => (
          <Box key={img.id} p={1} bgcolor="grey.300" style={{ margin: "10px" }}>
            <div className={classes.pictures}>
              <img src={img.picUrl} alt="img" className={classes.poster} />
              <p>{img.title}</p>
              <FormControlLabel
                control={
                  <Checkbox
                    // defaultChecked={img.selected}
                    name="checkedB"
                    color="primary"
                    checked={img.selected}
                    onChange={() => handleCheckedList(img.id)}
                  ></Checkbox>
                }
                label="Buy"
              />

              {/* <input type="checkbox" defaultChecked={img.selected}></input> */}
            </div>
          </Box>
        ))}
      </Box>
    </div>
  );
};
