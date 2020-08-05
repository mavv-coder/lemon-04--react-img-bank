import React from "react";
import { MovieInfoVm } from "./movie-list.vm";
import { useStyles } from "./movie-list.styles";

// Material UI ~ Components
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Typography } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

interface Props {
  pictureList: MovieInfoVm[];
  handleCheckedList: (product: MovieInfoVm) => void;
}

export const PictureListComponent: React.FC<Props> = (props) => {
  const { pictureList, handleCheckedList } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {pictureList.map((img) => (
          <Paper key={img.id} className={classes.paper}>
            <div className={classes.pictures}>
              <img src={img.picUrl} alt="img" className={classes.poster} />
              <Typography>{img.title}</Typography>
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
          </Paper>
        ))}
      </Grid>
    </div>
  );
};
