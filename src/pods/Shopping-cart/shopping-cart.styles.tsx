import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  root: {
    marginTop: "18px",
    width: "100%",
    maxWidth: 360,
    backgroundColor: "#e6ecff",
  },
  flexContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "10px",
    padding: "5px",
    backgroundColor: "#e6ecff",
  },
  title: {
    fontSize: "18px",
    color: "#3f51b5",
    marginLeft: "25px",
  },
  cartIcon: {
    color: "#3f51b5",
    fontSize: "30px",
  },
  list: {
    listStyle: "none",
    margin: 0,
    paddingLeft: "10px",
    paddingTop: "10px",
  },
  listItem: {
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    margin: "10px",
  },
  listImg: {
    // width: "50px",
    height: "50px",
    // borderRadius: "50%",
    marginRight: "20px",
  },
  deleteIcon: {
    fontSize: "30px",
    marginLeft: "10px",
    color: "#ba000d",
  },
}));