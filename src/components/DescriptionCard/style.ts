import styled from "styled-components";

const StyledDescriptionCard = styled.div`
  width: 80%;
  margin: auto;
  background-color: var(--color-grey10);
  border-radius: 0.125rem;
  padding: 1rem;
  max-width: 500px;

  h2 {
    font-size: var(--font-heading-7);
    font-weight: 600;
    color: var(--color-grey1);
    margin-bottom: 1rem;
  }

  p {
    font-family: Inter;
    font-size: var(--font-heading-7);
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: left;
    color: var(--color-grey2);
    padding: 1rem;
  }
`;

export default StyledDescriptionCard;
