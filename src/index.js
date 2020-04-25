import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AppCopia from "./AppCopia";
import AppCopiaDos from "./AppCopiaDos";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";

ReactDOM.render(
  <React.StrictMode>
    {/* <AppCopia /> */}
    {/* <App /> */}
    <AppCopiaDos />
  </React.StrictMode>,
  document.getElementById("root")
);
