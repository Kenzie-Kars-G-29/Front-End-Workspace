import styled from "styled-components";

const FooterStyled = styled.footer`
  background-color: black;
  width: 100%;
  height: 140px;
  color: white;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  height: 200px;

  .logo img {
    height: 40px;
    width: auto;
  }

  .text {
    font-size: 14px;
  }
  .seta {
    width: 53px;
    height: 50px;
    cursor: pointer;
  }

  .button img {
    width: 100%;
    height: auto;
    margin-left: 5px;
  }
  @media (min-width: 769px) {
    padding: 0 50px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export default FooterStyled;
