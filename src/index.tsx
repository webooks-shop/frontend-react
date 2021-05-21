import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "@app/App";
import { store } from "@app/store";
import GlobalStyle from "./Global.styles";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
