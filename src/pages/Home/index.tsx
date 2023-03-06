import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import {
  CoffeeCards,
  HomeCoffees,
  HomeContainer,
  HomeInfo,
  HomeItem,
  HomeItems,
  HomeItemSvgContainer,
  HomeMain,
  HomePublicity,
  HomeTitle,
} from "./styles";

import coffeePub from "../../assets/publicity.svg";
import { CoffeeCard } from "./Components/CoffeeCard";
import { coffees } from "../../data/coffees";

export function Home() {
  return (
    <>
      <HomeContainer>
        <HomeMain>
          <HomeInfo>
            <HomeTitle>
              <h2>Encontre o café perfeito para qualquer hora do dia</h2>

              <span>
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora
              </span>
            </HomeTitle>
            <HomeItems>
              <HomeItem>
                <HomeItemSvgContainer variant="#C47F17">
                  <ShoppingCart size={16} weight="fill" color="white" />
                </HomeItemSvgContainer>

                <span>Compra simples e segura</span>
              </HomeItem>
              <HomeItem>
                <HomeItemSvgContainer variant="#574F4D">
                  <Package size={16} weight="fill" color="white" />
                </HomeItemSvgContainer>

                <span>Embalagem mantém o café intacto</span>
              </HomeItem>
              <HomeItem>
                <HomeItemSvgContainer variant="#DBAC2C">
                  <Timer size={16} weight="fill" color="white" />
                </HomeItemSvgContainer>

                <span>Entrega rápida e rastreada</span>
              </HomeItem>
              <HomeItem>
                <HomeItemSvgContainer variant="#8047F8">
                  <Coffee size={16} weight="fill" color="white" />
                </HomeItemSvgContainer>

                <span>O café chega fresquinho até você</span>
              </HomeItem>
            </HomeItems>
          </HomeInfo>

          <HomePublicity src={coffeePub} alt="" />
        </HomeMain>
      </HomeContainer>
      <HomeCoffees>
        <h1>Nossos cafés</h1>

        <CoffeeCards>
          {coffees.map((coffee) => {
            return (
              <CoffeeCard
                key={coffee.id}
                id={coffee.id}
                src={coffee.src}
                alt={coffee.alt}
                tags={coffee.tags !== undefined ? coffee.tags : [""]}
                title={coffee.title}
                subtitle={coffee.subtitle !== undefined ? coffee.subtitle : ""}
                price={coffee.price}
              />
            );
          })}
        </CoffeeCards>
      </HomeCoffees>
    </>
  );
}
