import { useContext } from "react";
import { CoffeesContext } from "../context/CartContext";

const MyContext = () => {
  return useContext(CoffeesContext)
}

export default MyContext;


