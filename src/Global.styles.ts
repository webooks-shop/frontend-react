import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
  margin: 0;
  font-family: "AppleSDGothicNeo",  "Segoe UI", "Roboto", "Oxygen", "Helvetica Neue", sans-serif;
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

export default GlobalStyle;
