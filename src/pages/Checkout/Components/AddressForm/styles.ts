import styled from "styled-components";

export const CheckoutAddressForm = styled.form`
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
    overflow: hidden;

    &:focus-within {
      border-color: ${(props) => props.theme.yellowDark};
    }
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

  @media only screen and (max-width: 650px) {
    div:nth-child(1n),
    div:nth-child(2n) {
      grid-template-columns: 1fr;
    }

    input:first-child {
      width: 100%;
    }
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  position: relative;

  width: inherit;

  > p {
    color: red;
  }
`;
