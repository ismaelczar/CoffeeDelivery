import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";

import { Router } from "./Router";
import { BrowserRouter } from 'react-router-dom'
import GlobalStyled from "./styles/global"
import { MycontextCart } from "./context/CartContext";
import { MyContextDelivery } from "./context/DeliveryContext";


export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <MycontextCart>
        <MyContextDelivery>

          <BrowserRouter>
            <Router />
          </BrowserRouter>
          <GlobalStyled />

        </MyContextDelivery>
      </MycontextCart>

    </ThemeProvider>
  )
}
