import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
  },
  flexContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    marginRight: "30px",
  },
  linkText: {
    textDecoration: "none",
    fontSize: "18px",
    padding: "12px",
    marginRight: "10px",
    borderRadius: "3px",
    color: "#fff",
    "&:hover": {
      color: "#3f51b5",
      backgroundColor: "#e6ecff",
    },
  },
  selected: {
    textDecoration: "none",
    fontSize: "18px",
    padding: "12px",
    marginRight: "10px",
    borderRadius: "3px",
    color: "#3f51b5",
    backgroundColor: "#e6ecff",
  },
  icon: {
    fontSize: "30px",
  },
}));
