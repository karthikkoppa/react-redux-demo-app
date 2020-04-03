import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configStore from "./app/store";
import App from "./App";
import * as serviceWorker from './serviceWorker';
import "./index.css";

const store = configStore();
const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
serviceWorker.unregister();
