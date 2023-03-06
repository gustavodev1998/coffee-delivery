import { CoffeeCard } from "../data/coffees";
import { ActionTypes, ActionTypesProps } from "./actions";

interface CreateCoffeeCardItem {
  id: string;
  coffee: CoffeeCard;
  totalAmount: number;
  totalCoffePrice: number;
}

interface CoffeeCartState {
  coffeesCards: CreateCoffeeCardItem[];
}

export function coffeesReducer(
  state: CoffeeCartState,
  action: ActionTypesProps
) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_COFFEE:
      return {
        ...state,
        coffees: [...state.coffeesCards, action.payload],
      };

    case ActionTypes.REMOVE_COFFEE: {
      let newCoffeeCart = state.coffeesCards.filter((coffeeCard) => {
        return coffeeCard.id !== action.id;
      });

      return {
        ...state,
        coffees: [...state.coffeesCards, newCoffeeCart],
      };
    }

    default:
      return state;
  }
}

export { ActionTypes };

export type { CreateCoffeeCardItem, CoffeeCartState };
