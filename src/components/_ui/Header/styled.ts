import { styled } from "styled-components";
import { NavLink } from 'react-router-dom'

export const Navigation = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 2rem 10rem;

    font-family: 'Roboto', sans-serif;

    a {
        text-decoration: none;
    }
`

export const Actions = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;

`

export const NavLinkBase = styled(NavLink)`
    padding: 0.75rem;
    border-radius: 8px;
`

export const Locale = styled(NavLinkBase)`
    display: flex;
    align-items: center;
    
    background: ${props => props.theme["purple-light"]};
    color: ${props => props.theme["purple"]};
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`

export const Cart = styled(NavLinkBase)`
    background: ${props => props.theme["yellow-light"]};
    color:${props => props.theme["yellow-dark"]} ;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

    display: flex;
    position:relative;

    span {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;

        font-size: 0.75rem;
        font-weight: 700;
        color:${props => props.theme.white};
        background:${props => props.theme["yellow-dark"]};
        border-radius: 50%;

        width:20px;
        height: 20px;
        margin-top: -40%;
        right: -10%;

        
    }
`