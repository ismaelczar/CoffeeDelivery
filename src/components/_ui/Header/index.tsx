import Logo from '/Logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { Actions, Cart, Locale, Navigation } from './styled'



import { NavLink } from 'react-router-dom'
import MyContext from '../../../hooks/cuscomContextHook'

export function Header() {
  const { coffeesList } = MyContext()

  return (
    <header>
      <Navigation>
        <NavLink to="/">
          <img src={Logo} alt="" />
        </NavLink>
        <Actions>
          <Locale to='/'>
            <MapPin size={22} weight="fill" />
            João Pessoa,PB
          </Locale>
          <Cart to="/checkout">
            <ShoppingCart size={22} weight="fill" />
            {
              coffeesList.length
                ? (<span>{coffeesList.length}</span>)
                : (<></>)
            }

          </Cart>
        </Actions>
      </Navigation>
    </header >
  )
}