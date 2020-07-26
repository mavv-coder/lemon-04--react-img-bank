import React from "react";
import ReactDOM from "react-dom";
import { App } from "./app";
import { AppContextProvider } from "./core/context";
import { Navbar } from "./layout/components";

ReactDOM.render(
  <div>
    <AppContextProvider>
      <Navbar />
      <App />
    </AppContextProvider>
  </div>,
  document.getElementById("root")
);
