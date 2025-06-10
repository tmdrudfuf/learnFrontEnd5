import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles.css";      // CSS 전역 스타일

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
