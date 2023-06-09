import styled from "styled-components";

const StyledCommentsCard = styled.div`
  width: 80%;
  margin: auto;
  
  border-radius: 0.125rem;
  padding: 1rem;
  max-width: 500px;
  h2 {
    font-size: var(--font-heading-7);
    font-weight: 600;
    color: var(--color-grey1);
    margin-bottom: 1rem;
  }
  .comment-box {
    background-color: #FDFDFD;
    border-radius: 0.125rem;
    padding: 1rem;
    margin-bottom: 1rem;

    img {
      width: 40px; 
      height: 40px; 
      border-radius: 50%;
      object-fit: cover;
    }

    p {
      margin: 0.5rem 0;
    }
  }
  .comment{
    background-color: #FDFDFD;
  
  }
  .comment-form {
    display: flex;
    flex-direction: column;
    background-color: #FDFDFD;
    border-radius: 0.125rem;
    padding: 1rem;
    align-items: flex-start;

    .user-info {
      display: flex;
      align-items: center;
      gap: 1rem;

      img {
        width: 40px; 
        height: 40px; 
        border-radius: 50%;
        object-fit: cover;
      }

      p {
        font-weight: bold;
      }
    }

    textarea {
      width: 100%;
      margin: 0.5rem 0;
      padding: 0.5rem;
      border: 1px solid var(--color-grey5);
      border-radius: 4px;
      resize: none; 
    }

    button {
      align-self: flex-end;
      padding: 10px 20px;
      border: none;
      border-radius: 4px;
      background-color: var(--color-grey5);
      color: var(--color-white);
      cursor: pointer;
      margin-bottom: 0.5rem; 
      &:hover {
        background-color: var(--color-grey4);
      }
    }

    .quick-messages {
      display: flex;
      gap: 1rem;

      button {
        padding: 5px;
        border: none;
        background-color: var(--color-grey5);
        color: var(--color-white);
        cursor: pointer;
        width: 100%;

        &:hover {
          background-color: var(--color-grey4);
        }
      }
    }
  }
`;

export default StyledCommentsCard;
