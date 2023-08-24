import styled from "styled-components";

export const CheckoutContainer = styled.main`

`



export const FormContainer = styled.form`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  
  gap: 2rem;
  margin-top: 2.5rem;

  font-size: 0.875rem;
  line-height: 130%;

  color:${props => props.theme["base-label"]};
`



