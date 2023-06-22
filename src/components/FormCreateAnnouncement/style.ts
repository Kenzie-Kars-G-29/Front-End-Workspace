import styled from "styled-components";

const StyledFormCreateAnnouncement = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 24px;

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

export default StyledFormCreateAnnouncement;
