import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  border: none;
  outline: none;
}

:root {
  --white: #FFF;
  --transparent: rgb(0, 0, 0,0);
  
  --gray-50: #F7F8FA;
  --gray-100: #E6E8EB;
  --gray-200: #AFB2B1;
  --gray-500: #808080;
  --gray-800: #494D4B;
  
  --green-500: #04D361;
  --red-500: #d32304;
  
  --purple-transparent: #4553ffcc;
  --purple-300: #4553FF;
  --purple-400: #3540C4; 
  --purple-500: #1E2570;
  --purple-800: #191E5C;
}

html {
  overflow: hidden;
}

body, input, textarea {
  font: 500 1rem Inter, sans-serif;
  background-color: var(--gray-50);
  color: var(--gray-500);
}

button {
  font: 500 1rem Inter, sans-serif;
  cursor: pointer;
}

h1 {
  font-size: 2rem;
}

h2 {
  font-size: 1.5rem;
}

h1, h2, h3, h4, h5, h6 {
  font-weight: 600;
  font-family: Lexend, sans-serif;
  color: var(--gray-800);
}

a {
  color: inherit;
  text-decoration: none;
}

/* width */
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: var(--gray-100);
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: var(--gray-500);
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: var(--gray-800);
}

@media (max-width: 1080px) {
  html {
    font-size: 93.75%;
  }
}

@media (max-width: 720px) {
  html {
    font-size: 87.5%;
  }
}
`;

export default GlobalStyles;
