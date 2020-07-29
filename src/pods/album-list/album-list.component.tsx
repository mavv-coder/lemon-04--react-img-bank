import React from "react";
import { AlbumInfoVm } from "./album-list.vm";
import { useStyles } from "./album-list.styles";

// Material UI ~ Components
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Typography } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

interface Props {
  albumList: AlbumInfoVm[];
  handleCheckedList: (product: AlbumInfoVm) => void;
}

export const AlbumListComponent: React.FC<Props> = (props) => {
  const { albumList, handleCheckedList } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {albumList.map((img) => (
          <Paper key={img.id} className={classes.paper}>
            <div className={classes.pictures}>
              <img src={img.picUrl} alt="img" className={classes.poster} />
              <Typography className={classes.bandTitle}>{img.band}</Typography>
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
