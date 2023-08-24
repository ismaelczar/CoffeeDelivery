import { ShoppingCartSimple } from "phosphor-react";
import { CartContainer } from "./styled";
import { ButtonHTMLAttributes } from "react";

interface ButtonCartProps extends ButtonHTMLAttributes<HTMLButtonElement> { }

export function ButtonCart({ ...props }: ButtonCartProps) {
    return (
        <CartContainer type='submit' {...props}>
            <ShoppingCartSimple size={22} weight="fill" />
        </CartContainer>
    )
}