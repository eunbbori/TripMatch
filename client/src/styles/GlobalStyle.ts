import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
    box-sizing: border-box;
  }
  
  main {
    min-height: 100vh;
    width: 100%;
    position: relative;
    padding-bottom: 10vh;
  }
`;

export default GlobalStyle;
