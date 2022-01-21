import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --font-primary: "Roboto", sans-serif;

    --color-dark: #4d4c4c;
    --color-purple: #4d1a88;
    --color-white: #eeeeee;
  }

  * {
    font-family: var(--font-primary);
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .wrapper {
    width: 90%;
    margin: 0 auto;
    padding: 40px 0;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;

export default GlobalStyle;
