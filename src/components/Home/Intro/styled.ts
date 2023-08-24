import { styled } from "styled-components";

export const Tittle = styled.h1`
    font-family: 'Baloo 2', cursive;
    font-size: 3rem;
    line-height: 130%;
`

export const Subtittle = styled.small`
    font-size: 1.25rem;
    padding-top: 1rem;
`

export const IconBase = styled.svg`
    width: 2rem;
    height: 2rem;
    padding: 0.5rem;
    border-radius: 1000px;
`

export const IconCart = styled(IconBase)`
    background: ${props => props.theme["yellow-dark"]};
`
export const IconTimer = styled(IconBase)`
    background: ${props => props.theme.yellow};
`

export const IconCoffee = styled(IconBase)`
    background: ${props => props.theme.purple};
`
export const IconPackage = styled(IconBase)`
    background: ${props => props.theme["base-text"]};
`

export const IntroContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3.5rem;

    margin: 5.688rem 0;

`
export const IntroText = styled.div`
    width: 37rem;
`

export const ItemsContainer = styled.div`
    display: flex;
    justify-content: space-between; 
    padding-top: 4.125rem;
`
export const Items = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.25rem;

    p {
        display: flex;
        align-items: center;
        flex-wrap: nowrap;
        gap: 5px;
    }

`

