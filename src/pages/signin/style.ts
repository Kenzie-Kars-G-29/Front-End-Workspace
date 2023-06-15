import styled from "styled-components";

export const SigninContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: var(--color-grey8);

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

export const StyledFormContainer = styled.div`
  background-color: var(--color-grey10);
  width: 100%;
  max-width: 400px;
  padding: 2rem;
  margin: auto;
  border-radius: 0.5rem;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

  h2 {
    font-family: Lexend;
    font-size: 24px;
    font-weight: 500;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: left;
    margin-bottom: 1rem;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 0.5rem;
    align-items: center;

    label {
      font-size: 14px;
      font-weight: 500;
      line-height: 17px;
      letter-spacing: 0em;
      text-align: left;
      color: var(--color-grey1);
    }

    input {
      max-width: 19.6875rem;
      width: 100%;
      box-sizing: border-box;
      background-color: var(--color-grey10);
    }

    button {
      max-width: 19.6875rem;
      width: 100%;
      box-sizing: border-box;
      padding: 1rem;
    }

    a {
      margin-left: auto;
      padding-right: 1.5rem;
      text-decoration: none;
      font-size: 14px;
      font-weight: 500;
      line-height: 24px;
      letter-spacing: 0em;
      text-align: left;
    }
  }

  .conta {
    text-align: center;
    width: 100%;
    display: block;
    color: var(--color-grey2);
    text-decoration: none;
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
   
  }

  a {
    margin: 20px 0;
    color: var(--color-grey1);
    text-decoration: none;
  }

  button {
    margin: 15px 0;
  }
`;
