import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "phosphor-react";
import {
  CheckoutAddress,
  CheckoutAddressForm,
  CheckoutAddressFormContainer,
  CheckoutAddressHeader,
  CheckoutContainer,
  CheckoutMain,
  CheckoutOrder,
  CheckoutOrderHeader,
  CheckoutOrderPayment,
  CheckoutOrderPaymentMethod,
  CheckoutTitle,
} from "./styles";

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
    </CheckoutContainer>
  );
}
