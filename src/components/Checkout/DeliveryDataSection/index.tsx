
import { Bank, CreditCard, MapPinLine, Money } from "phosphor-react";
import { DeliveryContext } from "../../../context/DeliveryContext";
import { CurrencyDollar } from "phosphor-react";
import SelectedProductsSummary from "../SelectedProductsSummary";
import MyContext from "../../../hooks/cuscomContextHook";

import { FormEvent, useContext, useState } from "react";
import { useNavigate } from 'react-router-dom'


import {
  CEP,
  DataEntryContainer,
  DataEntryHeader,
  DataInputSection,
  InputComplement,
  InputUf,
  Title,
  CardInputContainer,
  PaymentMethodContainer,
  ButtonContainer
} from "./styled";

import { defaultValue } from "../../../context/DeliveryContext";

const DeliveryDataSection = () => {
  const navigate = useNavigate()

  const { handleUpdateDeliveryData } = useContext(DeliveryContext)
  const { setCoffeeList } = MyContext()


  const [deliveryChengeData, setDeliveryChengeData] = useState(defaultValue);
  const [activeButton, setActiveButton] = useState<string | null>(null)

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setDeliveryChengeData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }


  function handleAddMetody(value: any) {
    setActiveButton(value)
    setDeliveryChengeData(card => ({ ...card, metody: value }))
  }


  function handleSubmitDelivery(event: FormEvent) {
    event.preventDefault()
    handleUpdateDeliveryData(deliveryChengeData);
    setCoffeeList([])
    navigate('/finished')
  }


  return (
    <>
      <form >
        <Title>Complete seu pedido</Title>
        <DataEntryContainer>
          <DataEntryHeader>
            <small>
              <MapPinLine width={22} />
              Endereço de Entrega
            </small>
            <p>Informe o endereço onde deseja receber seu pedido.</p>
          </DataEntryHeader>

          <CEP
            type="text"
            name="cep"
            placeholder="CEP"
            onChange={handleChange}
            value={deliveryChengeData.cep}
          />
          <input
            type="text"
            name="address"
            placeholder="Rua"
            onChange={handleChange}
            value={deliveryChengeData.address}
          />

          <DataInputSection>
            <input
              type="text"
              name="number"
              placeholder="Número"
              onChange={handleChange}
              value={deliveryChengeData.number}
            />
            <InputComplement
              type="text"
              name="complement"
              placeholder="Complemento"
              onChange={handleChange}
              value={deliveryChengeData.complement}
            />
          </DataInputSection>

          <DataInputSection>
            <input
              type="text"
              name="district"
              placeholder="Bairro"
              onChange={handleChange}
              value={deliveryChengeData.district}
            />
            <input
              type="text"
              name="city"
              placeholder="Cidade"
              onChange={handleChange}
              value={deliveryChengeData.city}
            />
            <InputUf
              type="text"
              name="state"
              placeholder="UF"
              onChange={handleChange}
              value={deliveryChengeData.state}
            />
          </DataInputSection>
        </DataEntryContainer>
        <PaymentMethodContainer>
          <div>
            <small>
              <CurrencyDollar size={22} />
              Pagamento
            </small>
            <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
          </div>

          <CardInputContainer>

            <ButtonContainer active={activeButton === 'Cartão de Crédito'} type="button" onClick={() => handleAddMetody('Cartão de Crédito')}>
              <CreditCard size={16} />
              CARTÃO DE CRÉDITO
            </ButtonContainer>

            <ButtonContainer active={activeButton === 'Cartão de Débito'} type="button" onClick={() => handleAddMetody('Cartão de Débito')}>
              <Bank size={16} />
              CARTÃO DE DÉBITO
            </ButtonContainer>

            <ButtonContainer active={activeButton === 'Dinheiro'} type="button" onClick={() => handleAddMetody('Dinheiro')}>
              <Money size={16} />
              DINHEIRO
            </ButtonContainer>

          </CardInputContainer>
        </PaymentMethodContainer>
      </form>
      <SelectedProductsSummary onFunction={handleSubmitDelivery} />
    </>
  )
}

export default DeliveryDataSection;


