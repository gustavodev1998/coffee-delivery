import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-text-size-adjust: 100%;
    }

    :focus {
        outline: 0;

    }

    body {
        background: ${(props) => props.theme.background};
        color: ${(props) => props.theme.subtitle};
    }

    button {
        color: #fff;
        cursor: pointer;
    }

    img, svg, a {
        cursor: pointer;
    }

    body, input-security, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }
`;
