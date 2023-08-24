import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import Artboard from '/Artboard.png'
import { IconCart, IconCoffee, IconPackage, IconTimer, IntroContainer, IntroText, Items, ItemsContainer, Subtittle, Tittle } from './styled'


export function Intro() {
    return (
        <IntroContainer>
            <IntroText>
                <Tittle>Econtre o café perfeito para qualquer hora do dia</Tittle>
                <Subtittle>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</Subtittle>
                <ItemsContainer>
                    <Items>
                        <p>
                            <IconCart>
                                <ShoppingCart color='#ffffff' weight="fill" />
                            </IconCart>
                            Compra simples e segura
                        </p>
                        <p>
                            <IconPackage>
                                <Package color='#ffffff' weight="fill" />
                            </IconPackage>
                            Embalagem mantém o café intacto
                        </p>
                    </Items>
                    <Items>
                        <p>
                            <IconTimer>
                                <Timer color='#ffffff' weight="fill" />
                            </IconTimer>
                            Entrega rápida e rastreada
                        </p>
                        <p>
                            <IconCoffee>
                                <Coffee color='#ffffff' weight="fill" />
                            </IconCoffee>
                            O café chega fresquinho até você
                        </p>
                    </Items>
                </ItemsContainer>
            </IntroText>
            <div>
                <img src={Artboard} alt="" />
            </div>
        </IntroContainer>

    )
}