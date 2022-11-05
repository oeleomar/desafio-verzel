import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
  
  h1, h2, h3 {
    font-family: 'Montserrat', sans-serif;
  }

  span, li, a, p {
    font-family: 'Inter', sans-serif;
  }
`;
