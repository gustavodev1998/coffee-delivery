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
import {
  CoffeeCartState,
  CreateCoffeeCardItem,
} from "../../../../reducers/reducer";

export interface CoffeeCardProps {
  id: string;
  src: string;
  alt: string;
  tags?: string[];
  title: string;
  subtitle?: string;
  price: string;
}

export function CoffeeCard(props: CoffeeCardProps) {
  const [coffeeCart, setCoffeCart] = useState<CoffeeCartState>();

  const [coffee, setCoffee] = useState<CreateCoffeeCardItem>({
    id: props.id,

    coffee: {
      id: props.id,
      src: props.src,
      alt: props.alt,
      title: props.title,
      price: props.price,
    },

    totalAmount: 1,
    totalCoffePrice: parseFloat(props.price),
  });

  const [coffeeAmount, setCoffeeAmount] = useState(1);

  function handleCoffeeAmount(operationType: string) {
    if (operationType === "minus") {
      if (coffeeAmount <= 1) {
        setCoffeeAmount(1);
      } else setCoffeeAmount(coffeeAmount - 1);
    } else {
      setCoffeeAmount(coffeeAmount + 1);
    }
  }

  function addCoffeeToCart(coffeeProps: CoffeeCardProps) {
    const totalPrice = coffeeAmount * parseFloat(coffeeProps.price);

    setCoffee({
      id: coffeeProps.id,
      coffee: {
        id: props.id,
        src: props.src,
        alt: props.alt,
        title: props.title,
        price: props.price,
      },
      totalAmount: coffeeAmount,
      totalCoffePrice: totalPrice,
    });

    const newCoffeeList = coffeeCart?.coffeesCards.map((cof) => {
      if (cof.id === coffeeProps.id) {
        return coffee;
      }

      return cof;
    });

    /* SET N FUNCIONA */
  }

  return (
    <CoffeeCardContainer>
      <CoffeeCardImageContainer>
        <img src={props.src} alt={props.alt} />
      </CoffeeCardImageContainer>

      <CoffeeTags>
        {props.tags!.map((tag, index) => {
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
          <Minus
            size={14}
            weight="fill"
            onClick={() => handleCoffeeAmount("minus")}
          />
          <span> {coffeeAmount} </span>
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
            onClick={() => addCoffeeToCart(props)}
          />
        </CoffeeCardCart>
      </CoffeeCardInfo>
    </CoffeeCardContainer>
  );
}
