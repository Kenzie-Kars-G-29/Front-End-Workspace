import styled from "styled-components";

const StyledProductInfoCard = styled.div`
  width: 80%;
  margin: auto;
  background-color: var(--color-grey10);
  border-radius: 0.125rem;
  padding: 1rem;
  max-width: 500px;
  border: 1px solid var(--color-grey10);

  h2 {
    font-size: var(--font-heading-7);
    font-weight: 600;
    color: var(--color-grey1);
    margin-bottom: 1rem;
  }

  .info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;

    .details {
      display: flex;
      justify-content: space-between;
      align-items: center;

      p {
        padding: 0.5rem;
        border: 1px solid var(--color-grey5);
        border-radius: 0.125rem;
      }
    }

    .span {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 0.5rem;
      padding: 0.2rem;
      border-radius: 0.375rem;

      span {
        background-color: var(--color-brand4);
        border-radius: 0.375rem;
        padding: 0.2rem;
        color: var(--color-brand1);
        font-size: 0.75rem;
      }
    }

    .price {
      font-size: var(--font-body-2);
      color: var(--color-grey2);
      font-weight: bold;
    }
  }
`;

export default StyledProductInfoCard;
