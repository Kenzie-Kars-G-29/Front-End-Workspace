import styled from "styled-components";

const StyledFormAddressUpdate = styled.form`
  width: 100%;
  max-height: 32.5rem;
  display: flex;
  flex-direction: column;
  gap: 15px;

  h3 {
    font-size: var(--font-body-1);
    color: var(--color-grey0);
    font-weight: var(--font-weight-500);
  }

  .row {
    width: 100%;
    max-width: 466px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .inputContainer {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .buttonContainer {
    width: 100%;
    max-width: 20.5625rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-self: flex-end;
    margin-right: 6px;
  }

  .buttonContainer button {
    height: 48px;
    width: 150px;
  }
  .buttonContainer button[type="submit"] {
    width: 100%;
    max-width: 193px;
  }
  .buttonContainer button[type="button"] {
    width: 100%;
    max-width: 117px;
  }
`;

export default StyledFormAddressUpdate;
