import React from "react";
import * as classes from "./login.styles";

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

  return (
    <>
      <Typography variant="h2" className={classes.title}>
        Movie Posters & Album Covers Collection
      </Typography>
      <Paper className={classes.paper}>
        <form onSubmit={handleNavigation}>
          <Typography className={classes.logTitle}>User login</Typography>
          <div className={classes.flexContainer}>
            <TextField
              type="text"
              variant="outlined"
              size="small"
              value={username}
              label="User Name"
              className={classes.input}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              id="standard-search"
              type="password"
              variant="outlined"
              size="small"
              value={password}
              label="Password"
              className={classes.input}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button type="submit" variant="contained" color="primary">
            login
          </Button>
        </form>
      </Paper>
    </>
  );
};
