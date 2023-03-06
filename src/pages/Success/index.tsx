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

export function Success() {
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
                Entrega em <strong> Rua João Daniel Martinelli, 102</strong>
                <p>Farrapos - Porto Alegre, RS</p>
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
                  <strong>Cartão de Crédito</strong>
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
