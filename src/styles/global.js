import { createGlobalStyle } from 'styled-components';
export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

  * {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
  color: ${(props) => props.theme.colors.primary}
  }

  html, body, #root {
    
    height: 100%;
    
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 14px 'Montserrat', sans-serif;
   
  }

  a, #id, Link{
    text-decoration: none;
      cursor: pointer;
  }

  li {
    list-style: none;
  }

  button {
    cursor: pointer;
    border: none;
    transition: all 0.2s;
    &:hover {
      transform: translate(2px, -2px);
    }
  }

`;




