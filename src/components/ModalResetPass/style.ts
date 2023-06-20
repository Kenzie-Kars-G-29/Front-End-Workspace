import styled from "styled-components";

export const ModalWrapper = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);

`;
export const ModalContent = styled.div`
  background-color: var(--color-grey6);
  width: 25rem;
  max-width: 80%;
  margin: 6.25rem auto;
  padding: 1.25rem;
  border-radius: 10px;
  height: max-content;

  .modalHeader {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.625rem;
  }

  .modalHeader > button {
    font-size: 0.938rem;
    font-weight: bold;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 0.625rem;
  }

  form > p {
    color: var(--color-brand2);
    font-size: 0.938rem;
  }

  form > input {
    background-color: var(--color-brand4);
    border: 1px solid var(--color-brand1);
    border-radius: 5px;
    width: 100%;
    height: 1.875rem;
    padding: 0.313rem;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 0.625rem;
  right: 0.625rem;
  cursor: pointer;
`;