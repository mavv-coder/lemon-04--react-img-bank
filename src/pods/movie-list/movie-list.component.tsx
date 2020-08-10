import React from "react";
import { MovieInfoVm } from "./movie-list.vm";
import * as classes from "./movie-list.styles";

// Material UI ~ Components
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Typography } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

interface Props {
  movieList: MovieInfoVm[];
  handleCheckedList: (product: MovieInfoVm) => void;
}

export const MovieListComponent: React.FC<Props> = (props) => {
  const { movieList, handleCheckedList } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {movieList.map((movie) => (
          <Paper key={movie.id} className={classes.card}>
            <div className={classes.img}>
              <img src={movie.picUrl} alt="img" className={classes.poster} />
              <Typography>{movie.title}</Typography>
              <FormControlLabel
                control={
                  <Checkbox
                    name="checkedB"
                    color="primary"
                    checked={movie.selected}
                    onChange={() => handleCheckedList(movie)}
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
