import * as Styled from "./styles";

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
    <Styled.CoffeeCardContainer>
      <Styled.CoffeeCardImageContainer>
        <img src={coffee.src} alt={coffee.alt} />
      </Styled.CoffeeCardImageContainer>

      <Styled.CoffeeTags>
        {coffee.tags!.map((tag, index) => {
          return <Styled.CoffeeTag key={index}>{tag}</Styled.CoffeeTag>;
        })}
      </Styled.CoffeeTags>

      <Styled.CoffeeCardTitle>{coffee.title}</Styled.CoffeeCardTitle>
      <Styled.CoffeeCardSubTitle>{coffee.subtitle}</Styled.CoffeeCardSubTitle>

      <Styled.CoffeeCardInfo>
        <Styled.CoffeeCardValue>
          R$ <span>{coffee.price}</span>
        </Styled.CoffeeCardValue>
        <Styled.CoffeeCardAmount>
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
        </Styled.CoffeeCardAmount>
        <Styled.CoffeeCardCart>
          <ShoppingCart
            size={22}
            weight="fill"
            color="white"
            onClick={handleAddToCart}
          />
        </Styled.CoffeeCardCart>
      </Styled.CoffeeCardInfo>
    </Styled.CoffeeCardContainer>
  );
}
