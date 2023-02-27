import styled from "styled-components";

import background from "../../assets/background.svg";

interface SvgVariantProps {
  variant: string;
}

/* 1st PART OF HOME */
export const HomeContainer = styled.div`
  background: repeat url(${background});
  margin: auto;
`;

export const HomeMain = styled.main`
  max-width: 1120px;
  min-height: 544px;
  margin: auto;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3.5rem;

  @media only screen and (max-width: 1200px) {
    flex-direction: column;
    padding: 0 2rem;
  }
`;

export const HomeInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

export const HomeTitle = styled.div`
  h2 {
    font-weight: 800;
    font-family: "Baloo 2";
    font-size: 3rem;
    color: ${(props) => props.theme.title};
    line-height: 130%;
    margin-bottom: 1rem;
  }

  span {
    font-weight: 400;
    font-size: 1.25rem;
    color: ${(props) => props.theme.subtitle};
    line-height: 130%;
  }

  margin-bottom: 4.125rem;
`;

export const HomeItems = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;

  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const HomeItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  span {
    color: ${(props) => props.theme.text};
    font-size: 1rem;
    line-height: 130%;
    margin-left: 0.75rem;
  }
`;

export const HomeItemSvgContainer = styled.div<SvgVariantProps>`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: ${(props) => props.variant};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HomePublicity = styled.img`
  width: 29.75rem;
  height: 22.5rem;

  @media only screen and (max-width: 500px) {
    display: none;
  }
`;

/* 2nd PART OF HOME */
export const HomeCoffees = styled.div`
  max-width: 1120px;
  margin: auto;
  padding: 3.5rem 0;

  h1 {
    ${(props) => props.theme.subtitle};
  }

  @media only screen and (max-width: 1200px) {
    padding: 2rem;
  }
`;

export const CoffeeCards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  gap: 2rem;

  @media only screen and (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: 615px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
