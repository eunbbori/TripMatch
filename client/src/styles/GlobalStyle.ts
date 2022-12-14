import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
    box-sizing: border-box;
  }
  
  main {
    min-height: 100vh;
    width: 100vw;
    position: relative;
  }

`;

export default GlobalStyle;
