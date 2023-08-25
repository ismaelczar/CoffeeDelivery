import { styled } from "styled-components";

export const ContainerFinished = styled.main`
  padding: 5rem 10rem;

  h1 {
    font-size: 2rem;
    font-weight: 800;
    line-height: 130%;
    font-family: 'Baloo 2', monospace;

    color:${props => props.theme["yellow-dark"]};
  }

  small {
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 130%;
    font-family: 'Baloo 2', monospace;

    color:${props => props.theme["base-subtittle"]}
    
  }
`

export const DetailsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6.375rem;

  img {
    margin-top: 2.5rem;
  }

`

export const DeliveryDataContainer = styled.div`
  padding: 2.5rem;
  min-width: 526px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;

  border: 1px solid ${props => props.theme["purple"]};
  border-radius: 6px 36px;

  margin-top: 2.5rem ;
`



export const Items = styled.div`
    display: flex;
    align-items: center;
    
    gap: 1.25rem;

    p {
      font-size: 1rem;
      line-height: 130%;

      color:${props => props.theme["base-text"]};
      
    }

    svg {
      color: ${props => props.theme.white};
      

    }


`

export const IconBase = styled.svg`
    width: 2rem;
    height: 2rem;
    padding: 0.5rem;
    border-radius: 1000px;
`

export const IconMap = styled(IconBase)`
    background: ${props => props.theme.purple};
`
export const IconTimer = styled(IconBase)`
    background: ${props => props.theme.yellow};
`

export const IconDollar = styled(IconBase)`
    background: ${props => props.theme["yellow-dark"]};
`