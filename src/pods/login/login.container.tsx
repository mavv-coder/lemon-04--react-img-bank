import React from "react";
import { useHistory } from "react-router-dom";
import { useAppContext } from "../../core/context";
import { LoginComponent } from "./login.component";
import { switchRoutes } from "../../core/router";

export const LoginContainer: React.FC = () => {
  const history = useHistory();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { setCheckedProductList } = useAppContext();

  React.useEffect(() => {
    setCheckedProductList([]);
  }, []);

  const handleNavigation = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    username === "admin" && password === "test"
      ? history.push(switchRoutes.movieList)
      : alert("User / password not valid, psst... admin / test");
  };

  return (
    <LoginComponent
      username={username}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}
      handleNavigation={handleNavigation}
    />
  );
};
