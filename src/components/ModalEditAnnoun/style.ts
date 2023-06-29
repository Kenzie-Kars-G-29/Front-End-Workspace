import styled from "styled-components";

export const ModalWrapper = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  max-height: max-content;
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

  .modalHeader{
    display: flex;
    justify-content: space-between;

    h3 {
      font-size: 15px;
    }
  }
`

const StyledFormEditAnnouncement = styled.form`
  /* display: flex;
  width: 100%;
  min-height: 72.125rem;

  flex-direction: column;
  justify-content: center;
  gap: 24px; */

  h3 {
    font-size: 15px;
  }

  input {
    background-color: red;
    border: 1px solid black;
  }

  .inputContainer {
    display: flex;
    flex-direction: row;
    gap: 14px;
  }
  .inputContainer.first,
  .inputContainer.fifth {
    flex-direction: column;
    gap: 24px;
  }
  .inputContainer.fifth .addImageInput {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    max-width: 315px;
  }
  .inputContainer.fifth .addImageInput button {
    color: var(--color-brand1);
    background-color: var(--color-brand3);
    font-weight: var(--font-weight-600);
    transition: 0.5s;
  }
  .inputContainer.fifth .addImageInput button:hover {
    transition: all 0.5s;
    opacity: 0.5;
  }

  .buttonContainer {
    width: 100%;
    max-width: 20.375rem;
    display: flex;
    gap: 7px;
  }
  .buttonContainer button {
    width: 100%;
    height: 48px;
    transition: all 0.5s;
  }
  .buttonContainer button[type="button"] {
    max-width: 7.875rem;
  }
  .buttonContainer button[type="submit"] {
    max-width: 12.0625rem;
  }
  .buttonContainer button:hover {
    transition: all 0.5s;
    opacity: 0.5;
  }
`;

export {StyledFormEditAnnouncement};
