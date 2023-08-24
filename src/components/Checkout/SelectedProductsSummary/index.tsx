import MyContext from "../../../hooks/cuscomContextHook";
import PickedCoffeeCard from "../PickedCoffeeCard";
import Logo from '../../../assets/Logo.svg'

import {
  PaymentDetailsContainer,
  Title, SelectedCoffees,
  CartCheckoutTotal,
  DetailsOrder,
  ButtonFinish,
  MessageDefault,
  SumaryContainer
} from "./styled"
import { FormEvent } from "react";

interface SelectedProductsSymmaryprops {
  onFunction: (event: FormEvent<Element>) => void
}

const SelectedProductsSummary = ({ onFunction }: SelectedProductsSymmaryprops) => {
  const { coffeesList } = MyContext()

  let valueCoffees = 0;
  const deliveryTax = 3.50;

  for (const coffee of coffeesList) {
    valueCoffees += coffee.price
  }

  const totalValue = (deliveryTax + valueCoffees)

  return (
    <SumaryContainer>
      <Title>Cafés selecionadas</Title>
      <PaymentDetailsContainer>
        <SelectedCoffees>

          {
            coffeesList.map(prevState => (
              <PickedCoffeeCard
                id={prevState.id}
                key={prevState.id}
                img={prevState.img}
                title={prevState.title}
                price={prevState.price}
                amount={prevState.amount}
              />
            ))
          }

        </SelectedCoffees>
        {coffeesList.length ?
          (<>
            <CartCheckoutTotal>
              <DetailsOrder>
                <p>Total de itens</p>
                <span>R$ {valueCoffees.toFixed(2)}</span>
              </DetailsOrder>
              <DetailsOrder>
                <p>Entrega</p>
                <span>R$ {deliveryTax.toFixed(2)}</span>
              </DetailsOrder>
              <DetailsOrder>
                <strong>Total</strong>
                <strong>R$ {totalValue.toFixed(2)}</strong>
              </DetailsOrder>
            </CartCheckoutTotal>

            <ButtonFinish onClick={onFunction}>ENVIAR PEDIDO</ButtonFinish >
          </>) : (<>
            <MessageDefault>
              <img src={Logo} alt="" />
              <strong>Carinho vazio ...</strong>
            </MessageDefault>
          </>)}

      </PaymentDetailsContainer>

    </SumaryContainer>
  )
}

export default SelectedProductsSummary;