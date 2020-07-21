import React from "react";
import ReactDOM from "react-dom";
import { App } from "./app";
import { AppContextProvider } from "./common/context";

ReactDOM.render(
  <div>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </div>,
  document.getElementById("root")
);
