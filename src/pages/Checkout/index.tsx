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
  CheckoutAddressForm,
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

import expresso from "../../assets/coffeetypes/expresso.svg";
import americano from "../../assets/coffeetypes/americano.svg";
import { NavLink } from "react-router-dom";

export function Checkout() {
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

            <CheckoutAddressForm>
              <input type="text" name="CEP" id="CEP" placeholder="CEP" />
              <input type="text" name="Rua" id="Rua" placeholder="Rua" />

              <div className="formRow">
                <input
                  type="number"
                  name="Numero"
                  id="Numero"
                  placeholder="Número"
                />
                <input
                  type="text"
                  name="Complemento"
                  id="Complemento"
                  placeholder="Complemento"
                />
              </div>

              <div className="formRow">
                <input
                  type="text"
                  name="Bairro"
                  id="Bairro"
                  placeholder="Bairro"
                />
                <input
                  type="text"
                  name="Cidade"
                  id="Cidade"
                  placeholder="Cidade"
                />
                <input type="text" name="UF" id="UF" placeholder="UF" />
              </div>
            </CheckoutAddressForm>
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
            <CheckoutOrderPaymentMethod>
              <CreditCard size={22} />
              <span>Cartão de crédito</span>
            </CheckoutOrderPaymentMethod>

            <CheckoutOrderPaymentMethod>
              <Bank size={22} />
              <span>cartão de débito</span>
            </CheckoutOrderPaymentMethod>

            <CheckoutOrderPaymentMethod>
              <Money size={22} />
              <span>dinheiro</span>
            </CheckoutOrderPaymentMethod>
          </CheckoutOrderPayment>
        </CheckoutOrder>
      </CheckoutMain>

      <CheckoutCartSelected>
        <CheckoutTitle>Cafés selecionados</CheckoutTitle>

        <CheckoutCartSelectedResume>
          <CoffeeCards>
            <CoffeeCard
              id={0}
              src={expresso}
              alt={"expresso"}
              title={"Expresso Tradicional"}
              price={"9,99"}
            />
            <CoffeeCard
              id={1}
              src={americano}
              alt={"americano"}
              title={"Expresso Americano"}
              price={"9,99"}
            />
          </CoffeeCards>

          <CheckoutInfo>
            <div>Total de itens</div>
            <span>R$ 29,70</span>
          </CheckoutInfo>

          <CheckoutInfo>
            <div>Entrega</div>
            <span>R$ 3,50</span>
          </CheckoutInfo>

          <CheckoutTotal>
            <div>Total</div>
            <span>R$ 33,20</span>
          </CheckoutTotal>

          <NavLink to="/success" title="Confirme" className="confirmOrder">
            <CheckoutConfirmOrder>Confirmar Pedido</CheckoutConfirmOrder>
          </NavLink>
        </CheckoutCartSelectedResume>
      </CheckoutCartSelected>
    </CheckoutContainer>
  );
}
