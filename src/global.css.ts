import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --white: #ffff;

    --gray-900: #0E0F10;
    --gray-800: #18181B;
    --gray-700: #A8A29E;
    --gray-600: #CBC3BE;

  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--gray-900);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Archivo', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    color: var(--gray-700);
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-family: 'Archivo', sans-serif;
    font-weight: 700;
    color: var(--white);
  }

  button {
    cursor: pointer;
  }
`;
