import styled from "styled-components";

const StyledImageGallery = styled.div`
  background-color: #fdfdfd;
  width: 50%;
  padding: 2.5rem;
  min-width: 300px; 

  h2 {
    font-size: var(--font-heading-7);
    font-weight: 600;
    color: var(--color-grey1);
    margin-bottom: 1rem;
  }
  div {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    align-items: stretch;
  }

  img {
    width: 100%;
    height: auto;
    background-color: #e9ecef;
  }
`;

export default StyledImageGallery;
