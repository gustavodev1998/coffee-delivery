import * as Styled from "./styles";

import { Minus, Plus, Trash } from "phosphor-react";

import { CartItem } from "../../../../contexts/CartContext";
import { useCart } from "../../../../hooks/useCart";
import { formatMoney } from "../../../../utils/formatMoney";

interface CoffeeProps {
  coffee: CartItem;
}

export function CoffeeCard({ coffee }: CoffeeProps) {
  const { changeCartItemQuantity, removeCartItem } = useCart();

  const coffeeTotal = parseFloat(coffee.price) * coffee.quantity;

  const formattedPrice = formatMoney(coffeeTotal);

  function handleIncrease() {
    changeCartItemQuantity(parseInt(coffee.id), "increase");
  }

  function handleDecrease() {
    changeCartItemQuantity(parseInt(coffee.id), "decrease");
  }

  function handleRemove() {
    removeCartItem(parseInt(coffee.id));
  }

  return (
    <Styled.CoffeeCardContainer>
      <Styled.CoffeeCardImageContainer>
        <img src={coffee.src} alt={coffee.alt} />
      </Styled.CoffeeCardImageContainer>

      <Styled.CoffeeCardOptions>
        <Styled.CoffeeCardTitle>{coffee.title}</Styled.CoffeeCardTitle>

        <Styled.CoffeeCardOperations>
          <Styled.CoffeeCardAmount>
            <Minus size={14} weight="fill" onClick={handleDecrease} />
            <span> {coffee.quantity} </span>
            <Plus size={14} weight="fill" onClick={handleIncrease} />
          </Styled.CoffeeCardAmount>

          <Styled.CheckoutRemoveFromCart onClick={handleRemove}>
            <Trash size={16} />
            <span>Remover</span>
          </Styled.CheckoutRemoveFromCart>
        </Styled.CoffeeCardOperations>
      </Styled.CoffeeCardOptions>

      <Styled.CoffeeCardInfo>
        <Styled.CoffeeCardValue>
          R$ <span>{formattedPrice}</span>
        </Styled.CoffeeCardValue>
      </Styled.CoffeeCardInfo>
    </Styled.CoffeeCardContainer>
  );
}
