import styled from "styled-components";

export const CoffeeCardContainer = styled.div`
  width: 16rem;
  margin-top: 3.375rem;
  text-align: center;
  padding: 0 1.5rem 1.5rem;
  background-color: ${(props) => props.theme.card};
  border-radius: 0.375rem 2.25rem;
`;

export const CoffeeCardImageContainer = styled.div`
  width: 100%;
  position: relative;
  bottom: 20px;
`;

export const CoffeeTags = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
`;

export const CoffeeTag = styled.div`
  font-weight: 700;
  font-size: 0.625rem;
  text-align: center;
  text-transform: uppercase;

  background-color: ${(props) => props.theme.yellowLight};
  color: ${(props) => props.theme.yellowDark};

  height: 1.3125rem;
  width: 5rem;
  border-radius: 100px;
  margin-bottom: 1rem;
  padding: 0.25rem 0.5rem;
`;
export const CoffeeCardTitle = styled.h2`
  font-weight: 700;
  color: ${(props) => props.theme.subtitle};
  line-height: 1.625rem;
  font-family: "Baloo 2";
  margin-bottom: 0.5rem;
`;
export const CoffeeCardSubTitle = styled.div`
  font-weight: 400;
  color: ${(props) => props.theme.label};
  line-height: 1.1375rem;
  font-family: "Roboto";
  font-size: 0.875rem;
  margin-bottom: 2.0625rem;
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
  font-size: 0.875rem;
  font-family: "Roboto";
  font-weight: 400;
  line-height: 1.1375rem;
  color: ${(props) => props.theme.text};

  span {
    font-size: 1.5rem;
    font-family: "Baloo 2";
    font-weight: 800;
    line-height: 1.95rem;
  }
`;

export const CoffeeCardAmount = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  width: 4.5rem;
  border-radius: 0.375rem;
  height: 2.375rem;
  background-color: ${(props) => props.theme.button};
`;

export const CoffeeCardCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  width: 2.375rem;
  border-radius: 0.375rem;
  height: 2.375rem;
  background-color: ${(props) => props.theme.purleDark};
`;
