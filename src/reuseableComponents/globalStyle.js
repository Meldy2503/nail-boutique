import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html {
    font-size: 62.5%;
}

a{
    text-decoration: none;
}

ul{
    list-style-type: none;
    
}

body {
    background-color: ${({ theme }) => theme.colors.primary1} ;
    font-size: 1.6rem;
    font-family: 'Poppins', sans-serif;
   
}

`;
