import React from "react";
import { useHistory } from "react-router-dom";
import { useAppContext } from "../../core/context";
import { LoginComponent } from "./login.component";

export const LoginContainer: React.FC = () => {
  const history = useHistory();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { setVisibleCart, setVisibleCartIcon } = useAppContext();

  React.useEffect(() => {
    setVisibleCart(false);
    setVisibleCartIcon(false);
  }, []);

  const handleNavigation = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (username === "admin" && password === "test") {
      history.push("/img-list");
    } else {
      alert("User / password not valid, psst... admin / test");
    }
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
