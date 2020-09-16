import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.css";
import "./global.css";

import App from "./components/App";

const container = document.getElementById("app");

//ReactDOM(que_voy_renderizar, donde_voy_hacer_append)
ReactDOM.render(<App />, container);
