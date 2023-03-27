import * as Styled from "./styles";

import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import coffeePub from "../../assets/publicity.svg";

import { CoffeeCard } from "./Components/CoffeeCard";
import { coffees } from "../../data/coffees";

export function Home() {
  return (
    <>
      <Styled.HomeContainer>
        <Styled.HomeMain>
          <Styled.HomeInfo>
            <Styled.HomeTitle>
              <h2>Encontre o café perfeito para qualquer hora do dia</h2>

              <span>
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora
              </span>
            </Styled.HomeTitle>
            <Styled.HomeItems>
              <Styled.HomeItem>
                <Styled.HomeItemSvgContainer variant="#C47F17">
                  <ShoppingCart size={16} weight="fill" color="white" />
                </Styled.HomeItemSvgContainer>

                <span>Compra simples e segura</span>
              </Styled.HomeItem>
              <Styled.HomeItem>
                <Styled.HomeItemSvgContainer variant="#574F4D">
                  <Package size={16} weight="fill" color="white" />
                </Styled.HomeItemSvgContainer>

                <span>Embalagem mantém o café intacto</span>
              </Styled.HomeItem>
              <Styled.HomeItem>
                <Styled.HomeItemSvgContainer variant="#DBAC2C">
                  <Timer size={16} weight="fill" color="white" />
                </Styled.HomeItemSvgContainer>

                <span>Entrega rápida e rastreada</span>
              </Styled.HomeItem>
              <Styled.HomeItem>
                <Styled.HomeItemSvgContainer variant="#8047F8">
                  <Coffee size={16} weight="fill" color="white" />
                </Styled.HomeItemSvgContainer>

                <span>O café chega fresquinho até você</span>
              </Styled.HomeItem>
            </Styled.HomeItems>
          </Styled.HomeInfo>

          <Styled.HomePublicity src={coffeePub} alt="" />
        </Styled.HomeMain>
      </Styled.HomeContainer>
      <Styled.HomeCoffees>
        <h1>Nossos cafés</h1>

        <Styled.CoffeeCards>
          {coffees.map((coffee) => {
            return <CoffeeCard key={coffee.id} coffee={coffee} />;
          })}
        </Styled.CoffeeCards>
      </Styled.HomeCoffees>
    </>
  );
}
