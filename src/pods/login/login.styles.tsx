import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root1: {
    height: "100vh",
    maxWidth: "max-content",
    display: "grid",
    alignItems: "start",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  con: {
    maxWidth: "100%",
    textAlign: "center",
    marginTop: "50px",
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

export default useStyles;
