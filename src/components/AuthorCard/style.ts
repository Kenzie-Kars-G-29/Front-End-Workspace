// AuthorCard/style.ts

import styled from "styled-components";

const StyledAuthorCard = styled.div`
  background-color: var(--color-grey10);
  width: 100%;
  min-width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  .author-image {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    border: 3px solid var(--color-brand1); 
    background-color: var(--color-brand1);
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;

    span{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 60px;
      height: 60px;
      font-size: max(30px);
  }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 50%;
    }
  }

  .author-name {
    margin-top: 10px;
    font-size: 18px;
    font-weight: bold;
  }

  .author-bio {
    font-family: Inter;
    font-size: 16px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: center;
    color: var(--color-grey2);
    padding: 1.5rem;
  }

  .author-button {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

`;

export default StyledAuthorCard;
