import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import App from "@app/App";
import createStore from "@app/store";

const store = createStore();

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
  margin: 0;
  font-family: "AppleSDGothicNeo", -apple-system, BlinkMacSystemFont, "Segoe UI",
    "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
    "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 15px;
  box-sizing: border-box;
}

* {
  box-sizing: inherit;
}

button {
  border: none;
  background-color: white;
  outline: none;
  cursor: pointer;
}
`;

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>,
  document.getElementById("root")
);
