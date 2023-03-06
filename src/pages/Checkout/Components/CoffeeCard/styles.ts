import styled from "styled-components";

export const CoffeeCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0.5rem 0.25rem;
  gap: 3.75rem;

  height: auto;
  margin-bottom: 3rem;

  position: relative;

  :after {
    position: absolute;
    content: "";
    border-bottom: 1px solid ${(props) => props.theme.button};
    width: 100%;
    transform: translateX(-50%);
    bottom: -1.5rem;
    left: 50%;
  }

  @media only screen and (max-width: 1200px) {
    justify-content: flex-start;
  }

  @media only screen and (max-width: 565px) {
    flex-direction: column;
    gap: 1.75rem;
  }
`;

export const CoffeeCardImageContainer = styled.div`
  width: 4rem;
  height: 4rem;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const CoffeeCardTitle = styled.h2`
  font-weight: 700;
  color: ${(props) => props.theme.subtitle};

  font-family: "Baloo 2";
  margin-bottom: 0.5rem;
  font-size: 1rem;
`;

export const CoffeeCardInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    color: ${(props) => props.theme.purple};
  }
`;

export const CoffeeCardValue = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 1rem;
  font-family: "Baloo 2";
  font-weight: 700;
  color: ${(props) => props.theme.text};
`;

export const CoffeeCardAmount = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.25rem;
  padding: 0.5rem;
  width: 4.5rem;
  border-radius: 0.375rem;
  height: 2.375rem;
  background-color: ${(props) => props.theme.button};

  margin-right: 0.5rem;

  svg {
    color: ${(props) => props.theme.purple};
  }
`;

export const CoffeeCardOptions = styled.div``;

export const CoffeeCardOperations = styled.div`
  display: flex;
  flex-direction: row;
`;

export const CheckoutRemoveFromCart = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.25rem;
  padding: 0.5rem;
  background-color: ${(props) => props.theme.button};
  border-radius: 0.375rem;

  color: ${(props) => props.theme.text};
  font-size: 1rem;
  font-weight: 400;
  border: none;

  transition: all ease 0.2s;
  border: 1px solid transparent;

  svg {
    color: ${(props) => props.theme.purple};
    margin-right: 0.25rem;
  }

  :hover,
  ::selection {
    background-color: ${(props) => props.theme.purpleLight};
    border: 1px solid ${(props) => props.theme.purple};
  }

  span {
    font-size: 0.75rem;
    font-family: "Roboto";
    font-weight: 400;
    text-transform: uppercase;
  }
`;
