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

  .buttonContainer {
    width: 100%;
    max-width: 20.375rem;
    display: flex;
    justify-content: end;
    gap: 7px;
  }
  .buttonContainer button[type="button"] {
    width: 100%;
    max-width: 7.875rem;
  }
  .buttonContainer button[type="submit"] {
    width: 100%;
    max-width: 12.0625rem;
  }
`;

export default StyledFormCreateAnnouncement;
