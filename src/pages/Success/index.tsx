import * as Styled from "./styles";

import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import confirmedOrder from "../../assets/confirmedOrder.svg";

import { OrderData } from "../Checkout/Components/AddressForm";
import { paymentMethods } from "../Checkout";

import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { useCart } from "../../hooks/useCart";

interface LocationType {
  state: OrderData;
}

export function Success() {
  const { state } = useLocation() as unknown as LocationType;

  const navigate = useNavigate();

  const { addressForm } = useCart();

  useEffect(() => {
    if (!state) {
      navigate("/");
    }

    console.log(addressForm);
  }, []);

  if (!state) return <></>;

  return (
    <Styled.SuccessContainer>
      <Styled.SuccessInfoOrder>
        <Styled.SuccessInfoTitle>
          Uhu! Pedido confirmado
        </Styled.SuccessInfoTitle>
        <Styled.SuccessInfoSubTitle>
          Agora é só aguardar que logo o café chegará até você
        </Styled.SuccessInfoSubTitle>

        <Styled.SuccessInfo>
          <Styled.SuccessInfoContainer>
            <Styled.SuccessInfoItem>
              <Styled.ItemSvgContainer variant="#8047F8">
                <MapPin size={16} weight="fill" color="white" />
              </Styled.ItemSvgContainer>
              <Styled.SuccessInfoDetail>
                Entrega em
                <strong>
                  {state.street}, {state.number}
                </strong>
                <p>
                  {state.district} - {state.city}, {state.uf}
                </p>
              </Styled.SuccessInfoDetail>
            </Styled.SuccessInfoItem>

            <Styled.SuccessInfoItem>
              <Styled.ItemSvgContainer variant="#DBAC2C">
                <Timer size={16} weight="fill" color="white" />
              </Styled.ItemSvgContainer>
              <Styled.SuccessInfoDetail>
                Previsão de entrega
                <p>
                  <strong>20 min - 30 min</strong>
                </p>
              </Styled.SuccessInfoDetail>
            </Styled.SuccessInfoItem>

            <Styled.SuccessInfoItem>
              <Styled.ItemSvgContainer variant="#C47F17">
                <CurrencyDollar size={16} weight="fill" color="white" />
              </Styled.ItemSvgContainer>
              <Styled.SuccessInfoDetail>
                Pagamento na entrega
                <p>
                  <strong>{paymentMethods[state.paymentMethod].label}</strong>
                </p>
              </Styled.SuccessInfoDetail>
            </Styled.SuccessInfoItem>
          </Styled.SuccessInfoContainer>
          <Styled.SuccessOrderIllustration>
            <img src={confirmedOrder} alt="" />
          </Styled.SuccessOrderIllustration>
        </Styled.SuccessInfo>
      </Styled.SuccessInfoOrder>
    </Styled.SuccessContainer>
  );
}
