import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  :root {
    --primary: #09f;
    --alert: #f55;
  }
  
  * {
    margin: 0;
    padding: 0;
    border: none;
    text-decoration: none;
    outline: none;
    box-sizing: border-box;
  }
  
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  button {
    cursor: pointer;
    transition: transform 150ms linear;
    &:active {
      transform: scale(.95);
    }
  }

  .page-container {
    width: 100vw;
    height: 100vh;
  }

  .full {
    width: 100%;
    height: 100%;
  }

  .center {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .text-primary { color: var(--primary); }
  .bg-primary { background: var(--primary); }
  .bg-alert { background: var(--alert) }
`