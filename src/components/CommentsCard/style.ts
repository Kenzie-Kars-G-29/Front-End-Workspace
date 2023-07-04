import styled from "styled-components";


const StyledCommentsCard = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Lexend:wght@100;400&display=swap');
  width: 80%;
  margin: auto;
  border-radius: 0.125rem;
  max-width: 500px;
  font-family: 'Lexend', sans-serif;
  font-weight: 100;


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
      padding: 1rem 0;
      margin-bottom: 1rem;
 
      .user-info-comment {
        display: flex;
        align-items: center;
        margin-bottom: 10px;

        .pontinho{
          margin: 0 8px 0 5px;
          color: var(--color-grey5);
        }

        .date{
          font-size: 12px;
          color: var(--color-grey4);
        }
       
        img {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          object-fit: cover;
        }

        p {
          margin: 0;
          font-size: 12px;
          line-height: 24px;
          letter-spacing: 0em;
          text-align: left;
          color: var(--color-grey2);
          font-size: 16px;
          margin:0 5px;
        }
        .name {
          font-weight: 600;
        }
        
      }
      .text{
        font-weight: 100
        }
      p {
        font-size: 14px;
        line-height: 24px;
        letter-spacing: 0em;
        text-align: left;
        color: var(--color-grey2);
        
      }
    }
  }
  .initialsCircle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #ccc;
  color: #fff;
  margin-right: 2px;
  background-color: blue;
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
        font-weight: 100;
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
