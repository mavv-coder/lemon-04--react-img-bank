import React from "react";
import ReactDOM from "react-dom";
import { App } from "./app";

const PictureListContext = React.createContext(null);

export const PictureListContextProvider = () => {
  return <PictureListContext.Provider value={"hola"} />;
};

ReactDOM.render(
  <div>
    <PictureListContextProvider>
      <App />
    </PictureListContextProvider>
  </div>,
  document.getElementById("root")
);
