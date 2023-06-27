import styled from "styled-components";

const HeaderStyled = styled.header`
  height: 80px;
  width: 100vw;
  background: var(--color-grey10);
  border: 2px solid var(--color-grey6);
  display: flex;
  justify-content: center;

  .divContainer {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 20px;
    height: 100%;
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  }

  .logo {
    margin-top: 10px;
    display: block;
    cursor: pointer;
  }

  .menuIcon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    cursor: pointer;
    z-index: 2;
  }

  .menuIcon img {
    width: 100%;
    height: auto;
  }

  .menuWrapper {
    display: none;
    position: absolute;
    top: 100%;
    right: 0;
    background: #fdfdfd;
    padding: 10px;
    justify-content: center;
    /* box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25); */
    width: 100%;
  }

  .menuButtons {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 90%;
  }

  .buttonRegister {
    width: 100%;
    margin: 20px 0 10px 0;
  }
  .menuWrapper.show {
    display: flex;
  }

  .buttonLogin {
    width: 40%;
    display: flex;
  }

  @media (min-width: 769px) {
    .divContainer {
      display: flex;
    }
    .menuWrapper {
      display: flex;
      align-items: flex-end;
      position: static;
      background: none;
      box-shadow: none;
      padding: 0;
      width: 300px;
    }
    .menuWrapper.show {
      display: flex;
    }
    .menuWrapper button {
      margin: 10px;
    }
    .menuButtons {
      flex-direction: row;
      align-items: center;
    }

    .menuIcon {
      display: none;
    }
    .buttonLogin {
      width: 200px;
    }
  }
`;

export default HeaderStyled;
