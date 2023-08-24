import { FormEvent, useState } from "react";
import MyContext from "../../../hooks/cuscomContextHook";
import { Toaster, toast } from 'sonner'

import { Trash } from "phosphor-react";
import {
  InputContainer,
  PickedCoffeContainer,
  PickedCoffeDescription,
  PickedCoffeeInput,
  Separator
} from "./styled";

interface PickedCoffeeCardProps {
  id: number
  img: string
  title: string
  price: number
  amount: number
}

const PickedCoffeeCard = ({ id, img, price, title, amount }: PickedCoffeeCardProps) => {

  const { handleDecrementCoffeeList, handleIncrementCoffeeList, handleRemovedCoffeesList } = MyContext()

  const [amountCoffee, setAmountCoffee] = useState(amount)

  function incrementAmount(event: FormEvent) {
    event.preventDefault()
    setAmountCoffee(prevValue => prevValue + 1)
    handleIncrementCoffeeList({ id, amount: + 1 })
  }

  function decrementAmount(event: FormEvent) {
    event.preventDefault()

    if (amountCoffee > 1) {
      setAmountCoffee(prevValue => prevValue - 1)
      handleDecrementCoffeeList({ id, amount: (amount - (amountCoffee - 1)) })
    }
  }

  function RemovedCoffeeList(event: FormEvent) {
    event.preventDefault()
    handleRemovedCoffeesList({ id, amount })
    toast.error('Produto removido')
  }

  return (
    <>
      <PickedCoffeContainer>
        <img src={img} />

        <div>
          <PickedCoffeDescription>
            <p>{title}</p>
            <strong>R$ {price}</strong>
          </PickedCoffeDescription>

          <PickedCoffeeInput>
            <InputContainer>
              <button onClick={decrementAmount}>-</button>
              <input type="number" name="" id="" value={amountCoffee} />
              <button onClick={incrementAmount}>+</button>
            </InputContainer>

            <button onClick={RemovedCoffeeList}>
              <Trash size={16} weight="bold" />
              REMOVER
            </button>
          </PickedCoffeeInput>
          <Toaster position="top-right" richColors />
        </div>
      </PickedCoffeContainer>

      <Separator />
    </>
  )
}

export default PickedCoffeeCard;