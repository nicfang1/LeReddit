import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ImageContextProvider from "./store/image-context";

ReactDOM.render(
  <ImageContextProvider>
    <App />
  </ImageContextProvider>,
  document.getElementById("root")
);
