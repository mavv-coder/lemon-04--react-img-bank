import React from "react";
import { getImgListPromise } from "../../api/mock-data";
import { mapPictureListFromApiToVm } from "./img-list.mapper";
import { PictureInfoVm } from "./img-list.vm";
import { useStyles } from "./img-list.styles";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Box from "@material-ui/core/Box";

export const ImgList: React.FC = () => {
  const [imgList, setImgList] = React.useState<PictureInfoVm[]>([]);
  const [] = React.useState<[]>([]);
  const classes = useStyles();

  const onLoadImgList = () => {
    getImgListPromise()
      .then((data) => mapPictureListFromApiToVm(data))
      .then((data) => setImgList(data));
  };

  React.useEffect(() => {
    onLoadImgList();
  }, []);

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
        {imgList.map((img) => (
          <Box key={img.id} p={1} bgcolor="grey.300" style={{ margin: "10px" }}>
            <div key={img.id} className={classes.pictures}>
              <img src={img.picUrl} alt="img" className={classes.poster} />
              <p>{img.title}</p>
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked={img.selected}
                    name="checkedB"
                    color="primary"
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
