import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  root: {
    maxWidth: "500px",
    height: "max-content",
    margin: "0 auto",
    marginTop: "18px",
    backgroundColor: "#e6ecff",
  },
  title: {
    fontSize: "18px",
    padding: "10px",
    textAlign: "center",
    color: "#3f51b5",
  },
  list: {
    listStyle: "none",
    margin: "0px",
    paddingLeft: "10px",
    paddingTop: "10px",
    paddingBottom: "10px",
  },
  listItem: {
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    margin: "10px",
  },
  listImg: {
    height: "50px",
    marginRight: "20px",
  },
  deleteIcon: {
    fontSize: "30px",
    marginLeft: "10px",
    color: "#ba000d",
  },
  total: {
    fontSize: "18px",
    padding: "10px",
    textAlign: "center",
    color: "#000",
  },
}));
