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
    borderBottom: "1px solid #fff",
    paddingBottom: "6px",
    fontSize: "18px",
    marginRight: "20px",
    color: "#fff",
    "&:hover": {
      color: "#faf300",
      borderBottom: "1px solid #faf300",
    },
  },
  icon: {
    fontSize: "30px",
  },
}));
