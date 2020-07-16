import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",

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
    minWidth: "150px",
    flex: 1,
  },
  poster: {
    width: "100px",
  },
}));
