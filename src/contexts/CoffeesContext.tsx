import {
  createContext,
  ReactNode,
  useEffect,
  useReducer,
  useState,
} from "react";

import { addNewCoffeeAction, removeCoffeeCard } from "../reducers/actions";

import { CoffeeCard } from "../data/coffees";
import { CreateCoffeeCardItem, coffeesReducer } from "../reducers/reducer";

interface CoffeeContextType {
  coffeeCardItems: CreateCoffeeCardItem[];
  activeCoffeeItem: CoffeeCard;
  activeCoffeeItemId: number;
  addNewCoffeeItemToCart: (data: CreateCoffeeCardItem) => void;
  removeCoffeeItemFromCart: (id: number) => void;
}

export const CoffeesContext = createContext({} as CoffeeContextType);

interface CoffeesContextProviderProps {
  children: ReactNode;
}

export function CoffeesContextProvider({
  children,
}: CoffeesContextProviderProps) {
  const [coffeesState, dispatch] = useReducer(coffeesReducer, {
    coffeesCards: [],
  });

  function addNewCoffeeItemToCart(data: CreateCoffeeCardItem) {
    dispatch(addNewCoffeeAction(data));
  }

  function removeCoffeeItemFromCart(data: CreateCoffeeCardItem) {
    dispatch(removeCoffeeCard(data.id));
  }

  /* return (
    <CoffeesContext.Provider
      value={(addNewCoffeeItemToCart, removeCoffeeItemFromCart)}>
      {children}
    </CoffeesContext.Provider>
  ); */
}
