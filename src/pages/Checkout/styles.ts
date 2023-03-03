import styled from "styled-components";

export const CheckoutContainer = styled.div`
  max-width: 1120px;
  margin: auto;
  display: flex;
  gap: 2rem;
  padding-bottom: 3.5rem;
`;

export const CheckoutMain = styled.main``;

/* ADDRESS */
export const CheckoutAddress = styled.div`
  margin-bottom: 0.75rem;
`;

export const CheckoutTitle = styled.h2`
  font-weight: 700;
  color: ${(props) => props.theme.subtitle};
  line-height: 1.625rem;
  font-family: "Baloo 2";
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
`;

export const CheckoutAddressFormContainer = styled.div`
  background-color: ${(props) => props.theme.card};
  padding: 2.5rem;
`;

export const CheckoutAddressHeader = styled.div`
  div {
    display: flex;
    align-items: center;
  }

  svg {
    color: ${(props) => props.theme.yellowDark};
  }

  p {
    font-size: 1rem;
    font-family: "Roboto";
    font-weight: 400;
    color: ${(props) => props.theme.subtitle};
    line-height: 130%;
    margin-left: 0.5rem;
    margin-bottom: 0.125rem;
  }

  span {
    font-size: 0.875rem;
    font-family: "Roboto";
    font-weight: 400;
    color: ${(props) => props.theme.text};
    line-height: 130%;
    margin-left: 1.875rem;
  }
`;

export const CheckoutAddressForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  margin-top: 2rem;

  input {
    background-color: ${(props) => props.theme.input};
    border: 1px solid ${(props) => props.theme.button};
    border-radius: 0.25rem;
    padding: 0.75rem;

    margin-bottom: 1rem;
  }

  input::placeholder {
    color: ${(props) => props.theme.label};
    opacity: 1; /* Firefox */
  }

  .formRow {
    gap: 0.75rem;
  }

  input:first-child {
    width: 12.5rem;
  }

  div:nth-child(1n) {
    display: grid;
    grid-template-columns: 12.5rem 1fr;
  }

  div:nth-child(2n) {
    display: grid;
    grid-template-columns: 12.5rem 1fr 3.75rem;
  }
`;

/* ORDER */
export const CheckoutOrder = styled.div`
  background-color: ${(props) => props.theme.card};
  padding: 2.5rem;
`;

export const CheckoutOrderHeader = styled.div`
  div {
    display: flex;
    align-items: center;
  }

  svg {
    color: ${(props) => props.theme.purple};
  }

  p {
    font-size: 1rem;
    font-family: "Roboto";
    font-weight: 400;
    color: ${(props) => props.theme.subtitle};
    line-height: 130%;
    margin-left: 0.5rem;
    margin-bottom: 0.125rem;
  }

  span {
    font-size: 0.875rem;
    font-family: "Roboto";
    font-weight: 400;
    color: ${(props) => props.theme.text};
    line-height: 130%;
    margin-left: 1.875rem;
  }
`;

export const CheckoutOrderPayment = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-top: 2rem;
`;

export const CheckoutOrderPaymentMethod = styled.button`
  display: flex;
  align-items: center;
  padding: 1rem;
  background-color: ${(props) => props.theme.button};
  border-radius: 0.375rem;
  text-transform: uppercase;
  color: ${(props) => props.theme.text};
  font-size: 0.75rem;
  font-weight: 400;
  border: none;

  transition: all ease 0.2s;
  border: 1px solid transparent;

  svg {
    color: ${(props) => props.theme.purple};
    margin-right: 0.8125rem;
  }

  :hover,
  ::selection {
    background-color: ${(props) => props.theme.purpleLight};
    border: 1px solid ${(props) => props.theme.purple};
  }
`;

export const CheckoutCartSelected = styled.div``;

export const CheckoutCartSelectedResume = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.25rem;
  background-color: ${(props) => props.theme.card};
  padding: 2.5rem;
  border-radius: 0.375rem 2.75rem;

  .confirmOrder {
    width: 100%;
  }
`;

/* 2ND PART */

export const CoffeeCards = styled.div`
  @media only screen and (max-width: 1200px) {
  }

  @media only screen and (max-width: 615px) {
  }
`;

export const CheckoutInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  gap: 0.5rem;
  font-size: 0.875rem;
  font-family: "Roboto";
`;

export const CheckoutTotal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  font-family: "Roboto";
  font-weight: 700;
  font-size: 1.25rem;
`;

export const CheckoutConfirmOrder = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  background-color: ${(props) => props.theme.yellow};
  padding: 0.75rem 0.5rem;
  width: 100%;
  border: none;
  border-radius: 0.375rem;
  opacity: 0.9;
  transition: all ease 0.2s;

  font-family: "Roboto";
  font-weight: 700;
  font-size: 0.875rem;
  text-transform: uppercase;

  :hover {
    opacity: 1;
  }
`;
