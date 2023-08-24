import { styled } from "styled-components";

export const Title = styled.strong`
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.25rem;

    padding-bottom: 0.5rem;
`

export const Description = styled.p`
    font-size: 0.875rem;
`

export const Value = styled.div`
    font-size: 1.25rem;
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    line-height: 130%;

`

export const CoffeeCardContainer = styled.div`
    width: 16rem;
    height: 19.375rem;
    border-radius: 0.375rem 2rem;
    padding: 0 1.25rem;

    display: flex;
    align-items: center;
    flex-direction: column;
    align-items: center;

    text-align: center;

    background: ${props => props.theme["base-card"]};

    img {
        margin-top: -20px;
    }
`
export const TagContainer = styled.div`
    font-size: 0.625rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 5px;
    margin:1rem 0 0.5rem 0;
    
    
    p {
        background: ${props => props.theme["yellow-light"]};
        color: ${props => props.theme["yellow-dark"]};

        padding: 0.25rem 0.5rem;
        
        border-radius: 8px;
        display: inline-block;
    }
`

export const Buy = styled.div`
    display:flex;
    align-items: center;
    gap: 1rem;
    flex-wrap: nowrap;

    padding-top: 2rem;

`
export const BuyCounter = styled.div`
    display:flex;
    flex-wrap: nowrap;
    gap: 0.5rem;

`


export const FormContainer = styled.form`
    display:flex;
    gap:0.75rem;

`

export const CounterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 4.5rem;
    height: 2.375rem;
    padding: 0 0.5rem;
    border-radius: 8px;

    background: ${props => props.theme["base-button"]};

    input {
        text-align: center;
        font-size: 0.875rem;
        font-weight: 800;
        border: none;
        width:40px;

        color: ${props => props.theme["base-title"]};
        background: ${props => props.theme["base-button"]};

    }

    input[type=number]::-webkit-inner-spin-button, 
    input[type=number]::-webkit-outer-spin-button { 
    -webkit-appearance: none; 
    margin: 0; 
}

    button {
        border: 0;
        background: ${props => props.theme["base-button"]};
        color: ${props => props.theme.purple};
        font-weight: 700;
        cursor: pointer;
    }
`