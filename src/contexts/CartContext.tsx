import { createContext, ReactNode, useEffect, useState } from "react";
import { CoffeeCardProps } from "../pages/Home/Components/CoffeeCard";
import { produce } from "immer";
import {
  ConfirmOrderFormData,
  PaymentMethods,
} from "../pages/Checkout/Components/AddressForm";

export interface CartItem extends CoffeeCardProps {
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  cartQuantity: number;
  cartItemsTotal: number;
  addCoffeeToCart: (coffee: CartItem) => void;
  changeCartItemQuantity: (
    carItemId: number,
    type: "increase" | "decrease"
  ) => void;
  removeCartItem: (carItemId: number) => void;
  cleanCart: () => void;

  addressForm: ConfirmOrderFormData;
  insertAddressInfo: (data: ConfirmOrderFormData) => void;
}

export const CartContext = createContext({} as CartContextType);

interface CartContextProviderProps {
  children: ReactNode;
}

const COFFEE_ITEMS_STORAGE_KEY = "coffeeDelivery:cartItems";

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const storagedCartItems = localStorage.getItem(COFFEE_ITEMS_STORAGE_KEY);
    if (storagedCartItems) {
      return JSON.parse(storagedCartItems);
    }
    return [];
  });

  const [addressForm, setAddressForm] = useState<ConfirmOrderFormData>({
    cep: "",
    street: "",
    number: "",
    district: "",
    city: "",
    uf: "",
    paymentMethod: PaymentMethods.credit,
  });

  const cartQuantity = cartItems.length;

  const cartItemsTotal = cartItems.reduce((accumulator, currCartItem) => {
    return accumulator + parseFloat(currCartItem.price) * currCartItem.quantity;
  }, 0);

  function addCoffeeToCart(coffee: CartItem) {
    const coffeeAlredyExistsInCart = cartItems.findIndex(
      (cartItem) => cartItem.id === coffee.id
    );

    const newCart = produce(cartItems, (draft) => {
      if (coffeeAlredyExistsInCart < 0) {
        draft.push(coffee);
      } else {
        draft[coffeeAlredyExistsInCart].quantity += coffee.quantity;
      }
    });

    setCartItems(newCart);
  }

  function changeCartItemQuantity(
    cartItemId: number,
    type: "increase" | "decrease"
  ) {
    const newCart = produce(cartItems, (draft) => {
      const coffeeExistsInCart = cartItems.findIndex(
        (cartItem) => parseInt(cartItem.id) === cartItemId
      );

      if (coffeeExistsInCart >= 0) {
        /* Item atual */
        const item = draft[coffeeExistsInCart];

        if (type === "decrease" && draft[coffeeExistsInCart].quantity === 1) {
          draft[coffeeExistsInCart].quantity = 1;
        } else {
          draft[coffeeExistsInCart].quantity =
            type === "increase" ? item.quantity + 1 : item.quantity - 1;
        }
      }
    });

    setCartItems(newCart);
  }

  function removeCartItem(cartItemId: number) {
    const newCart = produce(cartItems, (draft) => {
      const coffeeExistsInCart = cartItems.findIndex(
        (cartItem) => parseInt(cartItem.id) === cartItemId
      );

      if (coffeeExistsInCart >= 0) {
        /* REMOVE ITEM DO ARRAY */
        draft.splice(coffeeExistsInCart, 1);
      }
    });

    setCartItems(newCart);
  }

  function cleanCart() {
    setCartItems([]);
  }

  async function insertAddressInfo(data: ConfirmOrderFormData) {
    console.log("dentro do INSERT");

    console.log(data);
    const { cep, city, district, number, paymentMethod, street, uf } = data;

    setAddressForm({
      cep,
      city,
      district,
      number,
      paymentMethod,
      street,
      uf,
    });
  }

  useEffect(() => {
    localStorage.setItem(COFFEE_ITEMS_STORAGE_KEY, JSON.stringify(cartItems));
  }, [cartItems]);

  /* O value possui os items que vamos compartilhar na app */
  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartQuantity,
        cartItemsTotal,
        addCoffeeToCart,
        changeCartItemQuantity,
        removeCartItem,
        cleanCart,
        addressForm,
        insertAddressInfo,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
