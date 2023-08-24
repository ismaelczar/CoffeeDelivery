import { styled } from "styled-components"

interface ButtonProps {
  active: boolean;
}


export const DataEntryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  max-width: 41rem;
  padding: 2.5rem;
  margin-top: 0.938rem;

  background: ${props => props.theme["base-card"]};
  border-radius: 6px;

  input {
    border: 0;
    padding: 0.75rem;
    border-radius: 4px;
    border:1px solid ${props => props.theme["base-button"]};
    background: ${props => props.theme["base-input"]};  
  }

`

export const Title = styled.strong`
  font-family: 'Baloo 2', monospace;
  font-size: 1.125rem;
  line-height: 130%;

  color: ${props => props.theme["base-subtittle"]};
`

export const DataEntryHeader = styled.div`
  margin-bottom: 1rem;
  
  small {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    
    font-size: 1rem;
    line-height: 130%;
    color: ${props => props.theme["base-subtittle"]};
  }
  
  svg {
    color: ${props => props.theme["yellow-dark"]};
    width: 22px;
    height: 22px;
  }
  
  p {
    padding-left: 1.9rem;
    font-size: 14px;
    font-style: normal;
    line-height: 130%;
  }
  
  `

export const DataInputSection = styled.div`
  width: 100%;
  display: flex;
  gap:0.75rem;
  
  > input {
    width:200px
  }
  `
export const CEP = styled.input`
  width:200px
`

export const InputComplement = styled.input`
  flex:1; 
`

export const InputUf = styled.input`
  max-width: 60px;
  `

export const PaymentMethodContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  padding: 2.5rem;
  margin-top: 0.75rem;

  background: ${props => props.theme["base-card"]};
  border-radius: 6px;

  small {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    
    font-size: 1rem;
    line-height: 130%;
    color: ${props => props.theme["base-subtittle"]};
  }
  
  svg {
    color: ${props => props.theme.purple};
  }
  
  p {
    padding-left: 1.9rem;
    font-size: 14px;
    font-style: normal;
    line-height: 130%;
  }
`

export const CardInputContainer = styled.div`
  display: flex;
  gap: 0.75rem;
`

export const ButtonContainer = styled.button<ButtonProps>`
    display: flex;
    align-items: center;
    gap:0.75rem;
    padding: 1rem;
    
    font-size: 0.75rem;
    line-height: 160%;
    text-transform: uppercase;
    
    border: 0;
    border-radius: 4px;

    min-width: 178px;
    
    background:${props => props.active ? props => props.theme["purple-light"] : props => props.theme["base-button"]};
    border: ${props => props.active ? `1px solid ${props.theme.purple}` : `1px solid ${props.theme["base-button"]}`};

  cursor: pointer;

`
