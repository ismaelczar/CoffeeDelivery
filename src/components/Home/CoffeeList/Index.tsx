import { CoffeeListContainer, List, Title } from "./styled"
import CoffeeCard from "../CoffeeCard"
import { coffees } from "../../../data/coffees"



export function CoffeList() {
  return (
    <CoffeeListContainer>
      <Title>Nossos cafés</Title>
      <List>
        {coffees.map(prevState => (
          <CoffeeCard
            id={prevState.id}
            key={prevState.id}
            img={prevState.img}
            tags={prevState.tags}
            title={prevState.title}
            description={prevState.description}
            price={prevState.price}
          />
        ))}
      </List>
    </CoffeeListContainer>
  )
}
