import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  root: {
    marginTop: "18px",
    marginLeft: "20px",
    width: "100%",
    maxWidth: "360px",
    height: "max-content",
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
    marginLeft: "25px",
    color: "#3f51b5",
  },
  cartIcon: {
    fontSize: "30px",
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
  footer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "10px",
    padding: "5px",
  },
  btn: {
    width: "100%",
  },
  link: {
    width: "100%",
    marginLeft: "10px",
    textDecoration: "none",
    color: "#fff",
  },
}));
