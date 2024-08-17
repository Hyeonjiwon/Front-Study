import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    padding-left: 320px;
    padding-right: 320px;
    margin: 0; // 기본 margin 제거 (선택사항)
    box-sizing: border-box; // box-sizing 설정 (선택사항)
  }
`;

export default GlobalStyle;
