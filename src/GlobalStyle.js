import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');

  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-size: 62.5%;
  }

  body {
    /* background-color: #999888; */
    font-size: 1.6rem;
    font-family: "Montserrat", sans-serif;
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;
