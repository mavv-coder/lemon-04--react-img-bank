import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    width: "100%",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  flexContainer: {
    padding: "20px",
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
  },
  pictures: {
    width: "20%",
    minWidth: "200px",
    flex: 1,
  },
  poster: {
    width: "100px",
  },
}));
