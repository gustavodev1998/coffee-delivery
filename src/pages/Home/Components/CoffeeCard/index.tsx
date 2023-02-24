import {
  CoffeeCardAmount,
  CoffeeCardCart,
  CoffeeCardContainer,
  CoffeeCardImageContainer,
  CoffeeCardInfo,
  CoffeeCardSubTitle,
  CoffeeCardTitle,
  CoffeeCardValue,
  CoffeeTag,
  CoffeeTags,
} from "./styles";

import { Minus, Plus, ShoppingCart } from "phosphor-react";

interface CoffeeCardProps {
  id: number;
  src: string;
  alt: string;
  tags: string[];
  title: string;
  subtitle: string;
  price: string;
}

export function CoffeeCard(props: CoffeeCardProps) {
  return (
    <CoffeeCardContainer>
      <CoffeeCardImageContainer>
        <img src={props.src} alt={props.alt} />
      </CoffeeCardImageContainer>

      <CoffeeTags>
        {props.tags.map((tag, index) => {
          return <CoffeeTag key={index}>{tag}</CoffeeTag>;
        })}
      </CoffeeTags>

      <CoffeeCardTitle>{props.title}</CoffeeCardTitle>
      <CoffeeCardSubTitle>{props.subtitle}</CoffeeCardSubTitle>

      <CoffeeCardInfo>
        <CoffeeCardValue>
          R$ <span>{props.price}</span>
        </CoffeeCardValue>
        <CoffeeCardAmount>
          <Minus size={14} weight="fill" />
          <span> 1 </span>
          <Plus size={14} weight="fill" />
        </CoffeeCardAmount>
        <CoffeeCardCart>
          <ShoppingCart size={22} weight="fill" color="white" />
        </CoffeeCardCart>
      </CoffeeCardInfo>
    </CoffeeCardContainer>
  );
}
