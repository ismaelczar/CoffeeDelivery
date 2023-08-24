import { styled } from "styled-components";

export const PickedCoffeContainer = styled.div`
  display: flex;
  gap:1.25rem;

  max-width: 23rem ;
  height: 5rem;

  img{
    width: 4rem;
    height: 4rem;
  }

`

export const PickedCoffeDescription = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4.563rem;

  margin-bottom: 0.5rem;

    p {
    color:${props => props.theme["base-subtittle"]};
    line-height: 130%
  }

  strong {
    color:${props => props.theme["base-text"]};
    line-height: 130%;
  
  }

`

export const PickedCoffeeInput = styled.form`
  display: flex;
  gap: 0.5rem;

  
  input {
    text-align: center;
    font-size: 0.875rem;
    font-weight: 800;
    border: none;
    width: 1.5rem;
    padding: 0.5rem;
    /* border-radius: 6px; */

     color: ${props => props.theme["base-title"]};
     background: ${props => props.theme["base-button"]};
    }

    input[type=number]::-webkit-inner-spin-button, 
    input[type=number]::-webkit-outer-spin-button { 
    -webkit-appearance: none; 
    margin: 0; 
    }

    button {
      display: flex;
      align-items: center;
      gap: 4px;
      padding: 0.5rem;
      max-height: 33px;

      border: 0;
      border-radius: 6px;

      font-size:0.75rem ;
      font-weight: 400;
      line-height: 160%;
      text-transform: uppercase;

      color: ${props => props.theme["base-title"]};
      background: ${props => props.theme["base-button"]};

      cursor: pointer;
    }


    svg{
    color:${props => props.theme.purple};
  }
  
`

export const Separator = styled.div`
  display: flex;
  flex: 1;

  border-bottom: 1px solid ${props => props.theme["base-button"]};
  margin-bottom: 1.5rem;
`

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    width: 1.5rem;
    border-radius: 0;
    padding: 0.5rem;

    font-size: 1rem;
    color: ${props => props.theme.purple};
    font-weight: bold;

    cursor: pointer;

    &:first-child {
      border-radius: 5px 0px 0px 5px;
    }

    &:last-child{
      border-radius: 0px 5px 5px 0px;
    }
  }
`