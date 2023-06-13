// AuthorCard/style.ts

import styled from "styled-components";

const StyledAuthorCard = styled.div`
  background-color: #fdfdfd;
  width: 20%;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  .author-image {
    width: 70px;
    height: 70px;
    border-radius: 50%;

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
    margin-top: 10px;
    text-align: center;
  }

  .author-button {
    margin-top: 10px;

    /* button {
      padding: 10px 20px;
      border: none;
      border-radius: 4px;
      background-color: var(--color-grey5);
      color: var(--color-white);
      cursor: pointer;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: var(--color-grey4);
      } */
    /* } */
  }
`;

export default StyledAuthorCard;
