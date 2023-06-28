import styled from "styled-components";

const StyledProfileConfig = styled.form`
  width: 100%;
  max-height: 44.75rem;
  display: flex;
  flex-direction: column;
  gap: 15px;

  h3 {
    font-size: var(--font-body-1);
    color: var(--color-grey0);
    font-weight: var(--font-weight-500);
  }

  .inputContainer {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .buttonContainer {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .buttonContainer button {
    height: 48px;
    width: 150px;
  }
`;

export default StyledProfileConfig;
