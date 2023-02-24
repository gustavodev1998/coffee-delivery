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

import expresso from "../../assets/coffeetypes/expresso.svg";
import americano from "../../assets/coffeetypes/americano.svg";
import cafeComLeite from "../../assets/coffeetypes/cafeComLeite.svg";
import chocolateQuente from "../../assets/coffeetypes/chocolateQuente.svg";
import cremoso from "../../assets/coffeetypes/cremoso.svg";
import gelado from "../../assets/coffeetypes/gelado.svg";
import latte from "../../assets/coffeetypes/latte.svg";
import macchiato from "../../assets/coffeetypes/macchiato.svg";
import mocaccino from "../../assets/coffeetypes/mocaccino.svg";

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
          <CoffeeCard
            id={0}
            src={expresso}
            alt={"expresso"}
            tags={["Tradicional"]}
            title={"Expresso Tradicional"}
            subtitle={"O tradicional café feito com água quente e grãos moídos"}
            price={"9,99"}
          />
          <CoffeeCard
            id={1}
            src={americano}
            alt={"americano"}
            tags={["Tradicional"]}
            title={"Expresso Americano"}
            subtitle={"Expresso diluído, menos intenso que o tradicional"}
            price={"9,99"}
          />
          <CoffeeCard
            id={2}
            src={cremoso}
            alt={"cremoso"}
            tags={["Tradicional"]}
            title={"Expresso Cremoso"}
            subtitle={"Café expresso tradicional com espuma cremosa"}
            price={"9,99"}
          />

          <CoffeeCard
            id={3}
            src={gelado}
            alt={"gelado"}
            tags={["Tradicional"]}
            title={"Expresso Gelado"}
            subtitle={"Bebida preparada com café expresso e cubos de gelo"}
            price={"9,99"}
          />

          <CoffeeCard
            id={4}
            src={cafeComLeite}
            alt={"cafeComLeite"}
            tags={["Tradicional", "Com Leite"]}
            title={"Café com Leite"}
            subtitle={
              "Meio a meio de expresso tradicional com leite vaporizado"
            }
            price={"9,99"}
          />

          <CoffeeCard
            id={5}
            src={latte}
            alt={"latte"}
            tags={["Tradicional", "Com Leite"]}
            title={"Latte"}
            subtitle={
              "Uma dose de café expresso com o dobro de leite e espuma cremosa"
            }
            price={"9,99"}
          />
        </CoffeeCards>
      </HomeCoffees>
    </>
  );
}
