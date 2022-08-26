import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        background: #FAFAFA;
        font-family: 'Inter', sans-serif;
    }

    a {
        cursor: pointer;
    }

    #/, #about, #services, #projects, #contact {
        
    }

    p {
        color: #909090;
    }

    html {
        scroll-behavior: smooth;
    }
`;

export default GlobalStyles;
