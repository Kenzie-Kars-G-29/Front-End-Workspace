import styled from "styled-components";

const StyledCommentsCard = styled.div`
  width: 80%;
  margin: auto;
  border-radius: 0.125rem;
  max-width: 500px;

  .comment {
    background-color: var(--color-grey10);
    border-radius: 0.125rem;
    padding: 2rem;
    max-width: 500px;

    h2 {
      font-size: var(--font-heading-7);
      font-weight: 600;
      color: var(--color-grey1);
      margin-bottom: 1rem;
    }

    .comment-box {
      background-color: var(--color-grey10);
      border-radius: 0.125rem;
      padding: 1rem;
      margin-bottom: 1rem;

      .user-info-comment {
        display: flex;
        align-items: center;
        gap: 0.5rem;

        img {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          object-fit: cover;
        }

        p {
          margin: 0;
          font-family: Inter;
          font-size: 12px;
          font-weight: 400;
          line-height: 24px;
          letter-spacing: 0em;
          text-align: left;
          color: var(--color-grey2);
        }
        .name {
          font-weight: 600;
        }
      }

      p {
        font-family: Inter;
        font-size: 14px;
        font-weight: 400;
        line-height: 24px;
        letter-spacing: 0em;
        text-align: left;
        color: var(--color-grey2);
      }
    }
  }

  .spacer {
    height: 2rem;
  }

  .comment-form {
    display: flex;
    flex-direction: column;
    background-color: var(--color-grey10);
    border-radius: 0.125rem;
    padding: 2rem;
    align-items: flex-start;
    max-width: 500px;

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
        color: var(--color-grey1);
        font-family: Inter;
        font-size: 14px;
        font-weight: 500;
        line-height: 24px;
        letter-spacing: 0em;
        text-align: left;
      }
    }

    textarea {
      width: 100%;
      height: 100px;
      margin: 0.5rem 0;
      padding: 0.5rem;
      border: 1px solid var(--color-grey5);
      border-radius: 4px;
      resize: none;
    }

    button {
      align-self: flex-end;
      margin-bottom: 0.87rem;
    }

    .quick-messages {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;

      button {
        padding: 5px 10px;
        border: none;
        background-color: var(--color-grey7);
        color: var(--color-grey3);
        cursor: pointer;
        min-width: 60px;
        max-width: 100%;
        width: auto;
        font-family: Inter;
        font-size: 12px;
        font-weight: 500;
        line-height: 24px;
        letter-spacing: 0em;
        text-align: left;
        border-radius: 1.2em;

        &:hover {
          background-color: var(--color-grey4);
        }
      }
    }
  }
`;

export default StyledCommentsCard;
