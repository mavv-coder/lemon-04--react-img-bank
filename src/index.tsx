import React from "react";
import ReactDOM from "react-dom";
import { App } from "./app";
import { AppContextProvider } from "./core/context";
import { StylesProvider } from "@material-ui/styles";

ReactDOM.render(
  <div>
    <StylesProvider injectFirst>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </StylesProvider>
  </div>,
  document.getElementById("root")
);
