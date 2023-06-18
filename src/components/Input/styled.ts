import styled, { css } from "styled-components";

interface iStyledInputProps {
  bgColor: boolean;
  border: boolean;
  size: "largue" | "normal" | "small";
  type?: "text" | "email" | "password" | "select" | "number" | string;
}

const StyledInput = styled.div<iStyledInputProps>`
  width: 100%;
  height: 4.6875rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  label {
    font-size: var(--font-body-2);
    font-weight: var(--font-weight-500);
    color: var(--color-grey0);
  }
  input {
    width: 100%;
    height: 3rem;
    border-radius: 0.25rem;
    border: 0.125rem solid;
    padding: 0rem 1rem;
    background-color: var(--color-brand4);
  }
  input[type="textarea"] {
    height: 5rem;
  }

  ${({ type }) => {
    if (type == "textarea") {
      return css`
        height: 6.5625rem;
      `;
    }
  }}

  ${({ bgColor }) => {
    switch (bgColor) {
      case true:
        return css`
          input {
            background-color: var(--color-grey7);
          }
        `;
    }
  }}

  ${({ border }) => {
    switch (border) {
      case true:
        return css`
          input {
            border-color: var(--color-grey5);
          }
        `;
    }
  }}

  ${({ size }) => {
    switch (size) {
      case "largue":
        return css`
          input {
            max-width: 29.125rem;
          }
        `;
      case "small":
        return css`
          input {
            max-width: 14.125rem;
          }
        `;
      default:
        return css`
          input {
            max-width: 19.6875rem;
          }
        `;
    }
  }}
`;

export default StyledInput;
