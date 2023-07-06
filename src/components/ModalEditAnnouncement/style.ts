import styled from "styled-components";

const StyledSucess = styled.div`
  width: 100%;
  height: 8.8125rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  h1 {
    font-size: var(--font-body-1);
    color: var(--color-grey1);
    font-weight: var(--font-weight-500);
  }
  p {
    font-size: var(--font-body-1);
    color: var(--color-grey3);
    font-weight: var(--font-weight-400);
  }
`;

const StyledFormEditAnnouncement = styled.form`
  display: flex;
  width: 100%;
  min-height: 72.125rem;

  flex-direction: column;
  justify-content: center;
  gap: 24px;

  h3 {
    font-size: 15px;
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
    display: flex;
    gap: 7px;
  }
  .buttonContainer button {
    width: 100%;
    height: 48px;
    transition: all 0.5s;
  }
  /* .buttonContainer button[type="button"] {
    max-width: 7.875rem;
  } */
  .buttonContainer button[type="submit"] {
    max-width: 12.0625rem;
  }
  .buttonContainer button:hover {
    transition: all 0.5s;
    opacity: 0.5;
  }
`;

export { StyledFormEditAnnouncement, StyledSucess };
