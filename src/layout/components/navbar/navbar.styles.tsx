import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  flexContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  title: {
    marginRight: "30px",
    fontSize: "20px",
    fontWeight: 400,
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
  activeLink: {
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
