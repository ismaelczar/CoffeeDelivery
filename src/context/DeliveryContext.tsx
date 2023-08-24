import { createContext, useState } from "react";

export interface DeliveryDataProps {
  cep: string
  address: string
  number: string
  district: string
  city: string
  state: string
  complement: string
  metody: string
}

export const defaultValue = {
  cep: "",
  address: "",
  number: "",
  complement: "",
  district: "",
  city: "",
  state: "",
  metody: ""
}

interface DeliveryContextProps {
  children: React.ReactNode;
}

interface DeliveryContextValueProps {
  handleUpdateDeliveryData: (contextData: DeliveryDataProps) => void,
  deliveryData: DeliveryDataProps;
}


const DeliveryContext = createContext({} as DeliveryContextValueProps)

const MyContextDelivery: React.FC<DeliveryContextProps> = ({ children }) => {
  const [deliveryData, setDeliveryData] = useState<DeliveryDataProps>(defaultValue)

  function handleUpdateDeliveryData(contextData: DeliveryDataProps) {
    setDeliveryData(contextData)

  }

  return (
    <DeliveryContext.Provider value={{ handleUpdateDeliveryData, deliveryData }}>
      {children}
    </DeliveryContext.Provider>
  )
}

export { DeliveryContext, MyContextDelivery }



