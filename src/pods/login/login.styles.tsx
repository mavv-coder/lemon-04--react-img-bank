import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  paper: {
    marginTop: "30px",
    padding: "10px",
    width: "max-content",
    margin: "0 auto",
    textAlign: "center",
    backgroundColor: "#e6ecff",
  },
  title: {
    textAlign: "center",
    color: "#3f51b5",
  },
  loginTitle: {
    fontSize: "20px",
    marginBottom: "20px",
  },
  label: {
    fontSize: "18px",
    display: "inline-block",
    marginRight: "10px",
  },
  flexContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
  },
}));
