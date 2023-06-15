import styled from "styled-components";

const StyledRegister = styled.main`
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  background: var( --color-grey7);

  form {
    display: flex;
    flex-direction: column;
    padding: 20px;
    gap: 10px;
    background: var(--color-grey10);

    label {
      margin-bottom: 5px;
    }

    input,
    textarea {
      margin-bottom: 10px;
      padding: 5px;
      border: 1.5px solid rgba(233, 236, 239, 1);
      padding: 0px 16px;
      border-radius: 4px;
      height: 40px;
      font-size: 14px;
      font-weight: 100;

    }
    textarea {
        height: 70px;
        padding-top: 10px;
    }
    input::placeholder,
    textarea::placeholder {
      color: var(--color-grey5);
      weight: 400;
    }

    .divCityState, .divNumberComplement{
        display:flex;
        width: 100%;
        gap: 10px;
    }
    .divCityState div, .divNumberComplement div{
        display: flex;
        flex-direction: column;
        width: 50%;
    }
    .buttonBuyerSeller{
        display: flex;
        justify-content: space-between;
        gap: 10px;

    } 
    .buttonBuyerSeller button{
        width:300px;
    }
  }
  @media (min-width: 769px) {
    height: 100%;
    form {
      max-width: 600px; 
      margin: 0 auto; 
      padding: 40px; 
      margin-top: 40px;
      margin-bottom: 40px;
      width: 410px;
      font-size: 16px;
    }
      p{
        margin: 10px 0;
      }
      .divCityState, .divNumberComplement{
        display:flex;
        width: 96%;
        gap: 10px;
    }
    .divCityState div, .divNumberComplement div{
        display: flex;
        flex-direction: column;
        width: 50%;
    }
    .buttonBuyerSeller button{
        margin: 0 10px 0 0;
    }
    .buttonBuyerSeller{
        display: flex;
        justify-content: space-between;

    } 
    .buttonBuyerSeller button{
        width:300px;
    }
  }
`;




export default StyledRegister;
