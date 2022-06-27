import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        background: #2D2D37;
        color: white;
        font-family: poppins;
    }

    html {
        scroll-behavior: smooth;
    }
`;

export default GlobalStyles;
