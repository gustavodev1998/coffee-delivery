import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import {
  ItemSvgContainer,
  SuccessContainer,
  SuccessInfo,
  SuccessInfoContainer,
  SuccessInfoDetail,
  SuccessInfoItem,
  SuccessInfoOrder,
  SuccessInfoSubTitle,
  SuccessInfoTitle,
  SuccessOrderIllustration,
} from "./styles";

import confirmedOrder from "../../assets/confirmedOrder.svg";
import { useLocation, useNavigate } from "react-router";
import { OrderData } from "../Checkout/Components/AddressForm";
import { paymentMethods } from "../Checkout";
import { useEffect } from "react";

interface LocationType {
  state: OrderData;
}

export function Success() {
  const { state } = useLocation() as unknown as LocationType;

  const navigate = useNavigate();

  useEffect(() => {
    if (!state) {
      navigate("/");
    }
  }, []);

  if (!state) return <></>;

  return (
    <SuccessContainer>
      <SuccessInfoOrder>
        <SuccessInfoTitle>Uhu! Pedido confirmado</SuccessInfoTitle>
        <SuccessInfoSubTitle>
          Agora é só aguardar que logo o café chegará até você
        </SuccessInfoSubTitle>

        <SuccessInfo>
          <SuccessInfoContainer>
            <SuccessInfoItem>
              <ItemSvgContainer variant="#8047F8">
                <MapPin size={16} weight="fill" color="white" />
              </ItemSvgContainer>
              <SuccessInfoDetail>
                Entrega em
                <strong>
                  {state.street}, {state.number}
                </strong>
                <p>
                  {state.district} - {state.city}, {state.uf}
                </p>
              </SuccessInfoDetail>
            </SuccessInfoItem>

            <SuccessInfoItem>
              <ItemSvgContainer variant="#DBAC2C">
                <Timer size={16} weight="fill" color="white" />
              </ItemSvgContainer>
              <SuccessInfoDetail>
                Previsão de entrega
                <p>
                  <strong>20 min - 30 min</strong>
                </p>
              </SuccessInfoDetail>
            </SuccessInfoItem>

            <SuccessInfoItem>
              <ItemSvgContainer variant="#C47F17">
                <CurrencyDollar size={16} weight="fill" color="white" />
              </ItemSvgContainer>
              <SuccessInfoDetail>
                Pagamento na entrega
                <p>
                  <strong>{paymentMethods[state.paymentMethod].label}</strong>
                </p>
              </SuccessInfoDetail>
            </SuccessInfoItem>
          </SuccessInfoContainer>
          <SuccessOrderIllustration>
            <img src={confirmedOrder} alt="" />
          </SuccessOrderIllustration>
        </SuccessInfo>
      </SuccessInfoOrder>
    </SuccessContainer>
  );
}
