import styled from "styled-components";

const StyledImageGallery = styled.div`
  background-color: var(--color-grey10);
  width: 100%;
  padding: 2.5rem;
  min-width: 300px;
  border-radius: 0.125rem;
  border: 1px solid var(--color-grey10);

  h2 {
    font-size: var(--font-heading-7);
    font-weight: 600;
    color: var(--color-grey1);
    margin-bottom: 1rem;
  }

  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 0.8rem;
  }

  img {
    width: calc(33.33% - 10px);
    height: auto;
    background-color: var(--color-grey7);
    padding: 0.5rem;
    margin-bottom: 10px;
    flex: 0 1 auto;
    border: 1px solid var(--color-grey10);
    border-radius: 0.125rem;
  }
`;

export default StyledImageGallery;
