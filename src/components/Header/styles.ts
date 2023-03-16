import styled from "styled-components";

export const HeaderContainer = styled.div`
  max-width: 1120px;
  height: 6.5rem;
  margin: auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 1200px) {
    padding: 0 2rem;
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 2.375rem;
      padding: 0.5rem;
      border-radius: 0.375rem;

      text-decoration: none;
    }

    span {
      font-size: 0.875rem;
      font-weight: 400;
    }

    a:first-child {
      width: 9rem;
      background-color: ${(props) => props.theme.purpleLight};
      color: ${(props) => props.theme.purleDark};

      svg {
        color: ${(props) => props.theme.purple};
      }
    }

    a:last-child {
      background-color: ${(props) => props.theme.yellowLight};

      svg {
        color: ${(props) => props.theme.yellowDark};
      }
    }
  }
`;

export const HeaderCart = styled.div`
  position: relative;

  span {
    position: absolute;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    top: calc(-1.25rem / 2);
    right: calc(-1.25rem / 2);
    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme.yellowDark};

    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem !important;
    font-weight: 700 !important;
  }
`;
