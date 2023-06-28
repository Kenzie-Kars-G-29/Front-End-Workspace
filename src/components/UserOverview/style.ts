import styled from "styled-components";

const StyledUserOverview = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 75%;
  height: 35%;
  padding: 4rem;
  background: var(--color-grey10);
  margin: 10vh auto;
  color: black;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: flex-start;
  gap: 1rem;

  .user-image {
    width: 80px;
    height: 80px;
    background: var(--color-brand2);
    border-radius: 50%;
    margin-right: 2em; 
  }

  .user-info {
    text-align: left;

    h2 {
      margin-top: 0.5rem;
      color: var(--color-grey1);
      font-size: 1.25rem;
      font-family: Lexend;
      font-weight: 600;

      span {
        font-weight: normal;
        margin-left: 0.5em;
        color: var(--color-brand1);
        border: solid 1px var(--brand-brand4);
        font-family: Inter;
        background-color: var(--color-brand4);
        line-height: 1.5rem;
        padding: 0.5rem;
        border-radius: 0.2rem;
      }
    }

    p {
      margin-top: 0.5em;
      color: var(--color-grey2);
      font-size: 1rem;
      font-family: Inter;
      line-height: 1.75rem;
    }

    .buttonContainer{
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 5px;
    }

    @media (max-width: 411px) {
      h2 {
        font-size: 1rem;

        span {
          padding: 0.25rem;
        }
      }
    }
  }
`;

export default StyledUserOverview;
