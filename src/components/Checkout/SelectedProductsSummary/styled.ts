import { styled } from "styled-components";

export const SumaryContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.strong`
  font-family: 'Baloo 2', monospace;
  font-size: 1.125rem;
  line-height: 130%;

  color: ${props => props.theme["base-subtittle"]};
`


export const PaymentDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  justify-content: center;
  
  min-width: 448px;
  min-height: 400px;
  padding: 2.5rem;
  margin-top: 0.938rem;

  background: ${props => props.theme["base-card"]};
  border-radius: 6px 44px;

`

export const SelectedCoffees = styled.div`
  
`

export const CartCheckoutTotal = styled.div`
  
`

export const DetailsOrder = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 0.75rem;

  p{
    font-size: 0.875rem;
    font-style: normal;
    line-height: 130%; /* 18.2px */
    color: ${props => props.theme["base-text"]};
  
  }

  span {
    font-size: 1rem;
    line-height: 130%;
    color: ${props => props.theme["base-text"]}
  }

  strong {
    font-size: 1.25rem;
    line-height: 130%;
    color: ${props => props.theme["base-subtittle"]}
  }
`

export const ButtonFinish = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.75rem 0.5rem;
  border-radius: 6px;
  border: 0;

  font-weight: 700;
  line-height: 160%;
  background: ${props => props.theme.yellow};
  color:${props => props.theme.white};

  cursor: pointer;

  :hover{
    background: ${props => props.theme["yellow-light"]};
  }
`

export const MessageDefault = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2.5rem;

  text-align: center;
`