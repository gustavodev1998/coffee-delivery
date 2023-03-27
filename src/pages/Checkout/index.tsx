import * as Styled from "./styles";

import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "phosphor-react";

import { CoffeeCard } from "./Components/CoffeeCard";
import { AddressForm, ConfirmOrderFormData } from "./Components/AddressForm";

import { useCart } from "../../hooks/useCart";
import { formatMoney } from "../../utils/formatMoney";

import { useNavigate } from "react-router-dom";

const DELIVERY_PRICE = 3.5;

export const paymentMethods = {
  credit: {
    label: "Cartão de Crédito",
    icon: <CreditCard size={22} />,
  },

  debit: {
    label: "Cartão de Débito",
    icon: <Bank size={22} />,
  },

  money: {
    label: "Dinheiro",
    icon: <Money size={22} />,
  },
};

export function Checkout() {
  const {
    cartItems,
    cartQuantity,
    cartItemsTotal,
    cleanCart,
    addressForm,
    insertAddressInfo,
  } = useCart();

  const deliveryPrice = formatMoney(DELIVERY_PRICE);
  const totalCheck = formatMoney(cartItemsTotal + DELIVERY_PRICE);

  const navigate = useNavigate();

  function handleConfirmOrder(data: ConfirmOrderFormData) {
    const updatedAddress = {
      ...addressForm,
      paymentMethod: data.paymentMethod,
    };

    insertAddressInfo(updatedAddress);

    navigate("/success", {
      state: addressForm,
    });

    cleanCart();
  }

  return (
    <Styled.CheckoutContainer>
      <Styled.CheckoutMain>
        <Styled.CheckoutAddress>
          <Styled.CheckoutTitle>Complete seu pedido</Styled.CheckoutTitle>

          <Styled.CheckoutAddressFormContainer>
            <Styled.CheckoutAddressHeader>
              <div>
                <MapPinLine size={22} weight="fill" />
                <p>Endereço de Entrega</p>
              </div>

              <span>Informe o endereço onde deseja receber seu pedido</span>
            </Styled.CheckoutAddressHeader>

            <AddressForm />
          </Styled.CheckoutAddressFormContainer>
        </Styled.CheckoutAddress>

        <Styled.CheckoutOrder>
          <Styled.CheckoutOrderHeader>
            <div>
              <CurrencyDollar size={22} weight="fill" />
              <p>Pagamento</p>
            </div>

            <span>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </span>
          </Styled.CheckoutOrderHeader>

          <Styled.CheckoutOrderPayment>
            {Object.entries(paymentMethods).map(([key, item]) => {
              return (
                <Styled.CheckoutOrderPaymentMethod key={item.label} value={key}>
                  <input type="radio" id={item.label} name="paymentMethod" />
                  <label htmlFor={item.label}>
                    {item.icon}
                    <span> {item.label}</span>
                  </label>
                </Styled.CheckoutOrderPaymentMethod>
              );
            })}
          </Styled.CheckoutOrderPayment>
        </Styled.CheckoutOrder>
      </Styled.CheckoutMain>

      <Styled.CheckoutCartSelected>
        <Styled.CheckoutTitle>Cafés selecionados</Styled.CheckoutTitle>

        <Styled.CheckoutCartSelectedResume>
          <Styled.CoffeeCards>
            {cartItems.map((coffee) => {
              return <CoffeeCard key={coffee.id} coffee={coffee} />;
            })}
          </Styled.CoffeeCards>

          <Styled.CheckoutInfo>
            <div>Total de itens</div>
            <span>R$ {formatMoney(cartItemsTotal)}</span>
          </Styled.CheckoutInfo>

          <Styled.CheckoutInfo>
            <div>Entrega</div>
            <span>R$ {deliveryPrice}</span>
          </Styled.CheckoutInfo>

          <Styled.CheckoutTotal>
            <div>Total</div>
            <span>R$ {totalCheck}</span>
          </Styled.CheckoutTotal>

          <Styled.CheckoutConfirmOrder
            disabled={cartQuantity <= 0}
            type="submit"
            onClick={() => handleConfirmOrder(addressForm)}
            className="confirmOrder"
          >
            Confirmar Pedido
          </Styled.CheckoutConfirmOrder>
        </Styled.CheckoutCartSelectedResume>
      </Styled.CheckoutCartSelected>
    </Styled.CheckoutContainer>
  );
}
