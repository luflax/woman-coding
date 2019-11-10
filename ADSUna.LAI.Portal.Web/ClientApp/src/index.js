import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "react-redux-toastr/lib/css/react-redux-toastr.min.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Store } from "./store";

import App from "./App";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={Store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  rootElement
);
