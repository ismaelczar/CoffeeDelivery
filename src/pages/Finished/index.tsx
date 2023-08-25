import { useContext } from 'react'
import illustration from '/Illustration.svg'
import { DeliveryContext } from '../../context/DeliveryContext'
import { DetailsContainer, ContainerFinished, DeliveryDataContainer, Items, IconMap, IconTimer, IconDollar } from './styled'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'

export function Finished() {

  const { deliveryData } = useContext(DeliveryContext)

  return (
    <ContainerFinished>

      <DetailsContainer>
        <div>
          <h1>Uhu! Pedido confirmado</h1>
          <small>Agora é só aguardar que logo o café chegará até você</small>
          <DeliveryDataContainer>

            <Items>
              <IconMap><MapPin size={16} weight="fill" /></IconMap>
              <div>
                <p>Entrega em <strong>{deliveryData.address},{deliveryData.number}</strong></p>
                <p>{deliveryData.district} - {deliveryData.city} , {deliveryData.state}</p>
              </div>
            </Items>

            <Items>
              <IconTimer><Timer size={16} weight="fill" /></IconTimer>
              <div>
                <p>Previsão de entrega</p>
                <strong>20 min - 30 min</strong>
              </div>
            </Items>

            <Items>
              <IconDollar><CurrencyDollar size={16} weight="fill" /></IconDollar>
              <div>
                <p>Pagamento na entrega</p>
                <strong>{deliveryData.metody}</strong>
              </div>
            </Items>

          </DeliveryDataContainer>
        </div>
        <img src={illustration} alt="" />
      </DetailsContainer>
    </ContainerFinished>
  )
}