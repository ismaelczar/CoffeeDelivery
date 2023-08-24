import { styled } from "styled-components";

export const CartContainer = styled.button`
    display: flex;
    align-items: center;
    padding:  0 0.5rem;
    border-radius: 8px;
    border:0;

    background: ${props => props.theme["purple-dark"]};
    color:${props => props.theme.white} ;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

    cursor:pointer;

    &:hover{
        background: ${props => props.theme["purple"]};
    }

    
`
