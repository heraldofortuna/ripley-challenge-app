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

  .subtitle {
    width: fit-content;
    ::after {
      content: "";
      display: block;
      height: 4px;
      width: 50%;
      background-color: var(--color-purple);
      border-radius: 4px;
    }
  }

  .loader {
    position: absolute;
    top: 0;
    background-color: var(--color-purple);
    width: 36px;
    height: 36px;
    animation-name: bounce_fountainG;
    -o-animation-name: bounce_fountainG;
    -ms-animation-name: bounce_fountainG;
    -webkit-animation-name: bounce_fountainG;
    -moz-animation-name: bounce_fountainG;
    animation-duration: 1.5s;
    -o-animation-duration: 1.5s;
    -ms-animation-duration: 1.5s;
    -webkit-animation-duration: 1.5s;
    -moz-animation-duration: 1.5s;
    animation-iteration-count: infinite;
    -o-animation-iteration-count: infinite;
    -ms-animation-iteration-count: infinite;
    -webkit-animation-iteration-count: infinite;
    -moz-animation-iteration-count: infinite;
    animation-direction: normal;
    -o-animation-direction: normal;
    -ms-animation-direction: normal;
    -webkit-animation-direction: normal;
    -moz-animation-direction: normal;
    transform: scale(0.3);
    -o-transform: scale(0.3);
    -ms-transform: scale(0.3);
    -webkit-transform: scale(0.3);
    -moz-transform: scale(0.3);
    border-radius: 24px;
    -o-border-radius: 24px;
    -ms-border-radius: 24px;
    -webkit-border-radius: 24px;
    -moz-border-radius: 24px;
  }
`;

export default GlobalStyle;
