import { createGlobalStyle } from 'styled-components'


const GlobalStyled = createGlobalStyle<{}>`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
    outline: 0;
    box-sizing: 0 0 0 2px ${(props) => props.theme['green-500']};
    }

    body {
    background-color:${(props) => props.theme.background};
    color:${(props) => props.theme["base-text"]} ;
    }

    body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    }
`
export default GlobalStyled