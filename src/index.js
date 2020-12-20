import React from "react";
import { render } from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { ThemeProvider } from "@material-ui/core";
import store from "data/store";
import baseMuiTheme from "common/themes/baseMuiTheme";
import "normalize.css";
import "typeface-roboto";

const container = document.createElement("div");
document.body.appendChild(container);

render(
  <Provider store={store}>
    <ThemeProvider theme={baseMuiTheme}>
      <App />
    </ThemeProvider>
  </Provider>,
  container
);
