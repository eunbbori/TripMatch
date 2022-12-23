import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  @font-face {
    font-family: 'S-CoreDream-3Light';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-3Light.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  body {
    box-sizing: border-box;
    font-family: 'S-CoreDream-3Light';
    font-size: 16px;
  }
  
  main {
    min-height: 100vh;
    width: 100%;
    position: relative;
    padding-bottom: 10vh;
  }
`;

export default GlobalStyle;
