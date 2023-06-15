import styled from "styled-components";
import bmwAzul from "../../assets/bmwAzul.png";

const StyledHome = styled.main`
  > section {
    display: flex;
    > ul {
      display: flex;
      /* flex-wrap: row; */
      flex-wrap: wrap;
      gap: 10px;
      /* overflow-y: auto; */
    }
  }

  .subHeader {
    width: 100vw;
    height: 55vh;
    background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
      url(${bmwAzul}) no-repeat;
    background-size: 85%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    gap: 1rem;
    padding: 25px;
  }

  > div {
    display: flex;
    width: 100%;
    justify-content: center;
    margin: 16px 0;

    > button {
      width: 80%;
      max-width: 300px;
    }

    @media (min-width: 1024px) {
      display: none;
    }
  }
`;

export default StyledHome;
