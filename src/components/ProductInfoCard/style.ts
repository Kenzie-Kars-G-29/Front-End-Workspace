import styled from 'styled-components';

const StyledProductInfoCard = styled.div`
  width: 80%;
  margin: auto;
  background-color: #FDFDFD;
  border-radius: 0.125rem;
  padding: 1rem;
  max-width: 500px;

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

    .price {
      font-size: var(--font-body-2);
      color: var(--color-grey2);
      font-weight: bold;
      
    }
  }

  .cta-button {
    background-color: ${(props) => props.theme.primaryColor};
    color: ${(props) => props.theme.textColor};
    font-size: 16px;
    font-weight: bold;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
  }
`;

export default StyledProductInfoCard;
