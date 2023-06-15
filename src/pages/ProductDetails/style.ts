import styled from "styled-components";

const StyledProductDetails = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  background: linear-gradient(
    to bottom,
    var(--color-brand2) 33%,
    var(--color-grey8) 0%
  );

  .content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 1000px;
    width: 100%;
    gap: 1rem;
  }

  .left-column,
  .right-column {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }

  .right-column {
    margin-top: 4.5rem;
  }

  @media (min-width: 768px) {
    .content {
      flex-direction: row;
      justify-content: space-between;
    }

    .left-column {
      width: 60%;
    }

    .right-column {
      width: 35%;
    }
  }
`;

export default StyledProductDetails;
