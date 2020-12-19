import React from "react";
import { render } from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "data/store";

const container = document.createElement("div");
document.body.appendChild(container);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  container
);
