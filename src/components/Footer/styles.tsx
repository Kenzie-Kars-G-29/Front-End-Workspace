import styled from "styled-components";

const FooterStyled = styled.footer`
  background-color: black;
  width: 100%;
  height: 140px;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  position: absolute;
  bottom: 0;

  .logo img {
    height: 40px;
    width: auto;
  }

  .text {
    font-size: 14px;
  }
  .seta{
    width: 53px;
    height: 50px;
    cursor: pointer;
  }


  .button img {
    width: 100%;
    height: auto;
    margin-left: 5px;
  }
`;

export default FooterStyled 