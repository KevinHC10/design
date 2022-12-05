import "core-js/stable";
import "core-js/es/set";
import "core-js/es/map";
import "regenerator-runtime/runtime";
import "raf/polyfill";
import "react-app-polyfill/ie9";
import "react-app-polyfill/stable";

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { store, persistor } from "./redux/configStore";

import {PersistGate} from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import GlobalStyle from "./styles/GlobalStyle";

import "./index.css";


ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter>
        <GlobalStyle />
        <App />
      </BrowserRouter>
      </PersistGate>
    </Provider>
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

serviceWorker.register();
