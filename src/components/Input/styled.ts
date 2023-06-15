import styled, { css } from "styled-components";

interface iStyledInputProps {
  bgColor: boolean;
  border: boolean;
}

const StyledInput = styled.div<iStyledInputProps>`
  width: 100%;
  max-width: 19.6875rem;
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
`;

export default StyledInput;
