import styled from "styled-components";

const StyledImageCard = styled.div`
  background-color: var(--color-grey10);
  width: 100%;
  min-height: 15rem;
  border-radius: 0.125rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2.5rem;
  margin-top: 4.5rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-color: var(--color-grey10);
    border-radius: 0.125rem;
  }

  @media (min-width: 320px) {
    width: 80%;
    max-width: 500px;
    img {
      width: 100%;
      height: auto;
    }
  }
`;

export default StyledImageCard;
