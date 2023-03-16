import { NavLink, useNavigate } from "react-router-dom";

import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "phosphor-react";

import { CoffeeCard } from "./Components/CoffeeCard";
import {
  CheckoutAddress,
  CheckoutAddressFormContainer,
  CheckoutAddressHeader,
  CheckoutCartSelected,
  CheckoutCartSelectedResume,
  CheckoutConfirmOrder,
  CheckoutContainer,
  CheckoutInfo,
  CheckoutMain,
  CheckoutOrder,
  CheckoutOrderHeader,
  CheckoutOrderPayment,
  CheckoutOrderPaymentMethod,
  CheckoutTitle,
  CheckoutTotal,
  CoffeeCards,
} from "./styles";
import { useCart } from "../../hooks/useCart";
import { formatMoney } from "../../utils/formatMoney";
import { AddressForm } from "./Components/AddressForm";

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
  const { cartItems, cartQuantity, cartItemsTotal, cleanCart } = useCart();

  const deliveryPrice = formatMoney(DELIVERY_PRICE);
  const totalCheck = formatMoney(cartItemsTotal + DELIVERY_PRICE);

  /*  const navigate = useNavigate();

  function handleConfirmOrder(data: ConfirmOrderFormData) {
    navigate("/orderConfirmed", {
      state: data,
    });

    cleanCart();
  } */

  return (
    <CheckoutContainer>
      <CheckoutMain>
        <CheckoutAddress>
          <CheckoutTitle>Complete seu pedido</CheckoutTitle>

          <CheckoutAddressFormContainer>
            <CheckoutAddressHeader>
              <div>
                <MapPinLine size={22} weight="fill" />
                <p>Endereço de Entrega</p>
              </div>

              <span>Informe o endereço onde deseja receber seu pedido</span>
            </CheckoutAddressHeader>

            <AddressForm />
          </CheckoutAddressFormContainer>
        </CheckoutAddress>

        <CheckoutOrder>
          <CheckoutOrderHeader>
            <div>
              <CurrencyDollar size={22} weight="fill" />
              <p>Pagamento</p>
            </div>

            <span>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </span>
          </CheckoutOrderHeader>

          <CheckoutOrderPayment>
            {Object.entries(paymentMethods).map(([key, item]) => {
              return (
                <CheckoutOrderPaymentMethod key={item.label} value={key}>
                  <input type="radio" id={item.label} name="paymentMethod" />
                  <label htmlFor={item.label}>
                    {item.icon}
                    <span> {item.label}</span>
                  </label>
                </CheckoutOrderPaymentMethod>
              );
            })}
          </CheckoutOrderPayment>
        </CheckoutOrder>
      </CheckoutMain>

      <CheckoutCartSelected>
        <CheckoutTitle>Cafés selecionados</CheckoutTitle>

        <CheckoutCartSelectedResume>
          <CoffeeCards>
            {cartItems.map((coffee) => {
              return <CoffeeCard key={coffee.id} coffee={coffee} />;
            })}
          </CoffeeCards>

          <CheckoutInfo>
            <div>Total de itens</div>
            <span>R$ {formatMoney(cartItemsTotal)}</span>
          </CheckoutInfo>

          <CheckoutInfo>
            <div>Entrega</div>
            <span>R$ {deliveryPrice}</span>
          </CheckoutInfo>

          <CheckoutTotal>
            <div>Total</div>
            <span>R$ {totalCheck}</span>
          </CheckoutTotal>

          <NavLink to="/success" title="Confirme" className="confirmOrder">
            <CheckoutConfirmOrder
              disabled={cartQuantity <= 0}
              type="submit"
              /* onClick={handleConfirmOrder} */
            >
              Confirmar Pedido
            </CheckoutConfirmOrder>
          </NavLink>
        </CheckoutCartSelectedResume>
      </CheckoutCartSelected>
    </CheckoutContainer>
  );
}
