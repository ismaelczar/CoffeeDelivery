import React, { createContext, useState } from "react";

interface CoffeeProps {
  id: number
  img: string
  title: string
  price: number
  amount: number
}

interface CoffeeItem {
  id: number
  amount: number
}

interface CoffeesContextProviderProps {
  children: React.ReactNode;
}

interface ContextProps {
  coffeesList: CoffeeProps[],
  handleUpdateCoffeesList: (coffeeToUpdate: CoffeeProps) => void,
  handleDecrementCoffeeList: (decrementAmountCoffee: CoffeeItem) => void,
  handleIncrementCoffeeList: (incrementAmountCoffee: CoffeeItem) => void,
  handleRemovedCoffeesList: (removedCoffee: CoffeeItem) => void,
  setCoffeeList: (coffeeToUpdate: CoffeeProps[]) => void
}

const CoffeesContext = createContext({} as ContextProps);

const MycontextCart: React.FC<CoffeesContextProviderProps> = ({ children }) => {
  const [coffeeList, setCoffeeList] = useState<CoffeeProps[]>([]);

  function handleUpdateCoffeesList(updatedCoffee: CoffeeProps) {
    const coffeeIdExisting = coffeeList.findIndex(coffee => coffee.id === updatedCoffee.id)

    if (coffeeIdExisting !== -1) {
      const updatedCoffeeList = coffeeList.map((coffee, index) => (
        index === coffeeIdExisting ? {
          ...coffee,
          amount: coffee.amount + updatedCoffee.amount,
          price: (updatedCoffee.amount + coffee.amount) * 9.99
        } : coffee
      ));
      setCoffeeList(updatedCoffeeList)
    } else {
      setCoffeeList(prevCoffee => [...prevCoffee, updatedCoffee])
    }
  }


  function handleDecrementCoffeeList(decrementAmountCoffee: CoffeeItem) {
    const coffeeIndex = coffeeList.findIndex(coffee => coffee.id === decrementAmountCoffee.id);

    if (coffeeIndex !== -1) {
      const updatedCoffeeList = coffeeList.map((coffee, index) => (
        index === coffeeIndex ? {
          ...coffee,
          amount: coffee.amount - decrementAmountCoffee.amount,
          price: (coffee.amount - decrementAmountCoffee.amount) * 9.99
        } : coffee
      ));

      setCoffeeList(updatedCoffeeList);
    }
  }

  function handleIncrementCoffeeList(incrementAmountCoffee: CoffeeItem) {
    const coffeeIndex = coffeeList.findIndex(coffee => coffee.id === incrementAmountCoffee.id);

    if (coffeeIndex !== -1) {
      const updatedCoffeeList = coffeeList.map((coffee, index) => (
        index === coffeeIndex ? {
          ...coffee,
          amount: coffee.amount + incrementAmountCoffee.amount,
          price: (coffee.amount + incrementAmountCoffee.amount) * 9.99
        } : coffee
      ));

      setCoffeeList(updatedCoffeeList);
    }
  }

  function handleRemovedCoffeesList(removedCoffee: CoffeeItem) {
    const updatedCoffeeList = coffeeList.filter(coffee => (
      coffee.id !== removedCoffee.id
    ))

    setCoffeeList(updatedCoffeeList)
  }


  return (
    <CoffeesContext.Provider value={{
      coffeesList: coffeeList,
      setCoffeeList,
      handleUpdateCoffeesList,
      handleDecrementCoffeeList,
      handleIncrementCoffeeList,
      handleRemovedCoffeesList
    }}>
      {children}
    </CoffeesContext.Provider>
  );
};

export { CoffeesContext, MycontextCart };
