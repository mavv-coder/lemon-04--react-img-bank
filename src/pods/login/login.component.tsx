import React from "react";
import { useHistory } from "react-router-dom";
import { useAppContext } from "../../core/context";
import useStyles from "./login.styles";

// Material UI ~ imports
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Typography } from "@material-ui/core";
import Container from "@material-ui/core/Container";

export const LoginPage: React.FC = () => {
  const history = useHistory();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const classes = useStyles();
  const { setVisibleCart, setVisibleCartIcon } = useAppContext();

  React.useEffect(() => {
    setVisibleCart(false);
    setVisibleCartIcon(false);
  }, []);

  const handleNavigation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (username === "admin" && password === "test") {
      history.push("/img-list");
    } else {
      alert("User / password not valid, psst... admin / test");
    }
  };

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <Typography
        variant="h1"
        style={{ fontSize: "60px", marginTop: "20px", textAlign: "center" }}
      >
        Film Image Bank Collection
      </Typography>
      <Container maxWidth="sm" className={classes.root1}>
        <div className={classes.con}>
          <form onSubmit={handleNavigation}>
            <Typography
              variant="h2"
              style={{ fontSize: "40px", marginBottom: "20px" }}
            >
              User login
            </Typography>
            <div>
              <div className={classes.flexContainer}>
                <Typography className={classes.label}>Username: </Typography>
                <TextField
                  type="text"
                  variant="outlined"
                  size="small"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className={classes.flexContainer}>
                <Typography className={classes.label}>Password: </Typography>
                <TextField
                  id="standard-search"
                  type="password"
                  variant="outlined"
                  size="small"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              style={{
                color: "white",
                marginTop: "20px",
              }}
            >
              login
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
};
