import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        background: #141424;
        color: #F9FDF7;
        font-family: 'Tenor Sans', sans-serif;
    }

    html {
        scroll-behavior: smooth;
    }
`;

export default GlobalStyles;
