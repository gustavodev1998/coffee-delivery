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
    <CoffeeCardContainer>
      <CoffeeCardImageContainer>
        <img src={coffee.src} alt={coffee.alt} />
      </CoffeeCardImageContainer>

      <CoffeeCardOptions>
        <CoffeeCardTitle>{coffee.title}</CoffeeCardTitle>

        <CoffeeCardOperations>
          <CoffeeCardAmount>
            <Minus size={14} weight="fill" onClick={handleDecrease} />
            <span> {coffee.quantity} </span>
            <Plus size={14} weight="fill" onClick={handleIncrease} />
          </CoffeeCardAmount>

          <CheckoutRemoveFromCart onClick={handleRemove}>
            <Trash size={16} />
            <span>Remover</span>
          </CheckoutRemoveFromCart>
        </CoffeeCardOperations>
      </CoffeeCardOptions>

      <CoffeeCardInfo>
        <CoffeeCardValue>
          R$ <span>{formattedPrice}</span>
        </CoffeeCardValue>
      </CoffeeCardInfo>
    </CoffeeCardContainer>
  );
}
