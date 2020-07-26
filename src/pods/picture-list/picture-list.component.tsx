import React from "react";
import { useStyles } from "./picture-list.styles";
import { PictureInfoVm } from "./picture-list.vm";

// Material UI
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Box from "@material-ui/core/Box";

interface Props {
  pictureList: PictureInfoVm[];
  handleCheckedList: (img: PictureInfoVm) => void;
}

export const PictureList: React.FC<Props> = (props) => {
  const { pictureList, handleCheckedList } = props;
  const classes = useStyles();

  return (
    <div className={`${classes.root}`}>
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="space-between"
        p={1}
        m={1}
        bgcolor="#ccc"
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
                    name="checkedB"
                    color="primary"
                    checked={img.selected}
                    onChange={() => handleCheckedList(img)}
                  ></Checkbox>
                }
                label="Buy"
              />
            </div>
          </Box>
        ))}
      </Box>
    </div>
  );
};
