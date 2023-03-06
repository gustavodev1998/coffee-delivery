import { CreateCoffeeCardItem } from "./reducer";

export enum ActionTypes {
  ADD_NEW_COFFEE = "ADD_NEW_COFFEE",
  REMOVE_COFFEE = "REMOVE_COFFEE",
}

export type ActionTypesProps =
  | { type: ActionTypes.ADD_NEW_COFFEE; payload: CreateCoffeeCardItem }
  | { type: ActionTypes.REMOVE_COFFEE; id: string };

export function addNewCoffeeAction(
  newCoffeeCardItem: CreateCoffeeCardItem
): ActionTypesProps {
  return {
    type: ActionTypes.ADD_NEW_COFFEE,
    payload: {
      ...newCoffeeCardItem,
    },
  };
}

export function removeCoffeeCard(coffeeCardId: string): ActionTypesProps {
  return {
    type: ActionTypes.REMOVE_COFFEE,
    id: coffeeCardId,
  };
}
