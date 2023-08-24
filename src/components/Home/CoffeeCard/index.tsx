import { FormEvent, useState } from 'react';
import MyContext from '../../../hooks/cuscomContextHook';
import { coffees } from '../../../data/coffees';
import { ButtonCart } from "../../Home/CoffeeCard/ButtonCart"


import { Toaster, toast } from 'sonner'
import {
  CounterContainer,
  FormContainer,
  Buy,
  BuyCounter,
  CoffeeCardContainer,
  Description,
  TagContainer,
  Title,
  Value
} from "./styled"



interface TagsProps {
  tag: string
}

interface CoffeeCardProps {
  id: number
  img: string
  tags: TagsProps[]
  title: string
  description: string
  price: number
}


const CoffeeCard = ({ id, img, tags, title, description, price }: CoffeeCardProps) => {

  const { handleUpdateCoffeesList } = MyContext();
  const [valueInput, setValueInput] = useState<number>(0)

  function handleChenge(event: any) {
    let value = Number(event.target.value)
    setValueInput(value)
  }

  function handleGetCoffeeById(event: FormEvent) {
    event.preventDefault()
    const coffee = coffees.find(coffee => coffee.id === id)

    if (coffee) {
      const { id, img, title, price } = coffee
      handleUpdateCoffeesList({ id, img, title, price: (valueInput * price), amount: valueInput })
      toast.success("Produto adicionado ao carinho!")
      setValueInput(0)
    }

  }

  function handleIncrementValueInput() {
    setValueInput(prevValue => prevValue + 1)
  }

  function handleDecrementValueInput() {
    setValueInput(prevValue => prevValue - 1)
  }


  return (
    <CoffeeCardContainer>
      <img src={img} alt="" />
      <TagContainer>
        {tags.map(tag => {
          if (tags.length) {
            return (
              <p key={tag.tag}>
                {tag.tag && <p>{tag.tag}</p>}
              </p>
            )
          }
        })
        }

      </TagContainer>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Buy>
        <Value>
          <span>R$</span>
          {price}
        </Value>
        <BuyCounter>

          <FormContainer onSubmit={handleGetCoffeeById}>
            <CounterContainer>
              <button type='button' onClick={handleDecrementValueInput}>-</button>
              <input
                type="number"
                id="amout"
                placeholder="0"
                min={1}
                max={10}
                value={valueInput}
                onChange={handleChenge}
              />
              <button type='button' onClick={handleIncrementValueInput}>+</button>
            </CounterContainer>
            <ButtonCart />
          </FormContainer >

        </BuyCounter>
      </Buy>

      <Toaster
        position="top-right"
        expand={true}
        richColors
      />
    </CoffeeCardContainer >
  )
}

export default CoffeeCard;
