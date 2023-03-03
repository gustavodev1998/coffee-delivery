import {
  CheckoutRemoveFromCart,
  CoffeeCardAmount,
  CoffeeCardContainer,
  CoffeeCardImageContainer,
  CoffeeCardInfo,
  CoffeeCardOperations,
  CoffeeCardOptions,
  CoffeeCardTitle,
  CoffeeCardValue,
} from "./styles";

import { Minus, Plus, Trash } from "phosphor-react";

interface CoffeeCardProps {
  id: number;
  src: string;
  alt: string;
  tags?: string[];
  title: string;
  subtitle?: string;
  price: string;
}

export function CoffeeCard(props: CoffeeCardProps) {
  return (
    <CoffeeCardContainer>
      <CoffeeCardImageContainer>
        <img src={props.src} alt={props.alt} />
      </CoffeeCardImageContainer>

      <CoffeeCardOptions>
        <CoffeeCardTitle>{props.title}</CoffeeCardTitle>

        <CoffeeCardOperations>
          <CoffeeCardAmount>
            <Minus size={14} weight="fill" />
            <span> 1 </span>
            <Plus size={14} weight="fill" />
          </CoffeeCardAmount>

          <CheckoutRemoveFromCart>
            <Trash size={16} />
            <span>Remover</span>
          </CheckoutRemoveFromCart>
        </CoffeeCardOperations>
      </CoffeeCardOptions>

      <CoffeeCardInfo>
        <CoffeeCardValue>
          R$ <span>{props.price}</span>
        </CoffeeCardValue>
      </CoffeeCardInfo>
    </CoffeeCardContainer>
  );
}
