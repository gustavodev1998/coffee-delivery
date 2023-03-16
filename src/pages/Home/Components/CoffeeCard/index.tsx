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
import { useState } from "react";
import { useCart } from "../../../../hooks/useCart";

export interface CoffeeCardProps {
  id: string;
  src: string;
  alt: string;
  tags?: string[];
  title: string;
  subtitle?: string;
  price: string;
}

interface CoffeeProps {
  coffee: CoffeeCardProps;
}

export function CoffeeCard({ coffee }: CoffeeProps) {
  const { addCoffeeToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  function handleAddToCart() {
    const coffeeToAdd = {
      ...coffee,
      quantity: quantity,
    };

    addCoffeeToCart(coffeeToAdd);
  }

  function handleCoffeeAmount(operationType: string) {
    if (operationType === "minus") {
      if (quantity <= 1) {
        setQuantity(1);
      } else setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  }

  return (
    <CoffeeCardContainer>
      <CoffeeCardImageContainer>
        <img src={coffee.src} alt={coffee.alt} />
      </CoffeeCardImageContainer>

      <CoffeeTags>
        {coffee.tags!.map((tag, index) => {
          return <CoffeeTag key={index}>{tag}</CoffeeTag>;
        })}
      </CoffeeTags>

      <CoffeeCardTitle>{coffee.title}</CoffeeCardTitle>
      <CoffeeCardSubTitle>{coffee.subtitle}</CoffeeCardSubTitle>

      <CoffeeCardInfo>
        <CoffeeCardValue>
          R$ <span>{coffee.price}</span>
        </CoffeeCardValue>
        <CoffeeCardAmount>
          <Minus
            size={14}
            weight="fill"
            onClick={() => handleCoffeeAmount("minus")}
          />
          <span> {quantity} </span>
          <Plus
            size={14}
            weight="fill"
            onClick={() => handleCoffeeAmount("plus")}
          />
        </CoffeeCardAmount>
        <CoffeeCardCart>
          <ShoppingCart
            size={22}
            weight="fill"
            color="white"
            onClick={handleAddToCart}
          />
        </CoffeeCardCart>
      </CoffeeCardInfo>
    </CoffeeCardContainer>
  );
}
