import styled from "styled-components";

interface SvgVariantProps {
  variant: string;
}

export const SuccessContainer = styled.div`
  max-width: 1120px;
  margin: auto;

  @media only screen and (max-width: 1200px) {
    padding: 0 2rem;
  }
`;

export const SuccessInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 1025px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
export const SuccessInfoOrder = styled.div``;

export const SuccessOrderIllustration = styled.div`
  img {
    width: 100%;
  }
  @media only screen and (max-width: 1025px) {
    margin-top: 2.5rem;
  }
`;

export const SuccessInfoTitle = styled.div`
  font-family: "Baloo 2";
  font-weight: 800;
  font-size: 2rem;
  color: ${(props) => props.theme.yellowDark};
`;

export const SuccessInfoSubTitle = styled.div`
  font-family: "Roboto";
  font-weight: 400;
  font-size: 1.25rem;
  color: ${(props) => props.theme.subtitle};
`;

export const SuccessInfoContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding: 2.5rem;
  margin-top: 2.5rem;
  gap: 2rem;
  border-radius: 0.375rem 2.25rem;

  border: 1px solid #8047f8;

  @media only screen and (max-width: 500px) {
    width: 100%;
  }
`;

export const SuccessInfoItem = styled.div`
  display: flex;
  align-items: center;
`;

export const ItemSvgContainer = styled.div<SvgVariantProps>`
  width: 2rem;
  height: 2rem;
  margin-right: 1.25rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.variant};
`;

export const SuccessInfoDetail = styled.div`
  color: ${(props) => props.theme.text};
  font-size: 1rem;
  font-weight: 400;
  font-family: "Roboto";

  @media only screen and (max-width: 500px) {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    font-size: 0.75rem;
  }
`;
