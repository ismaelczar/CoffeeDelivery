import DeliveryDataSection from "../../components/Checkout/DeliveryDataSection";

import {
  CheckoutContainer,
  FormContainer,
} from "./styled";



export function Checkout() {


  return (
    <CheckoutContainer>
      <FormContainer>
        <DeliveryDataSection />
      </FormContainer>
    </CheckoutContainer>
  )
}



