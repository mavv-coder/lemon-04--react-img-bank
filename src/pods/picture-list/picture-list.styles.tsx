import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    textAlign: "center",
    marginLeft: "3px",
    marginTop: "20px",
  },
  paper: {
    margin: "10px",
    padding: "5px",
    backgroundColor: "#e6ecff",
    minWidth: "200px",
  },
  pictures: {
    margin: "10px",
  },
  poster: {
    width: "100px",
    marginBottom: "10px",
  },
}));
