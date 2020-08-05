import React from "react";
import { useStyles } from "./login.styles";

// Material UI ~ Components
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Typography } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";

interface Props {
  username: string;
  setUsername: (value: string) => void;
  password: string;
  setPassword: (value: string) => void;
  handleNavigation: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const LoginComponent: React.FC<Props> = (props) => {
  const {
    username,
    password,
    setUsername,
    setPassword,
    handleNavigation,
  } = props;
  const classes = useStyles();

  return (
    <>
      <Typography variant="h2" className={classes.title}>
        Movie Posters & Album Covers Collection
      </Typography>
      <Paper className={classes.paper}>
        <form onSubmit={handleNavigation}>
          <Typography className={classes.loginTitle}>User login</Typography>
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
      </Paper>
    </>
  );
};
