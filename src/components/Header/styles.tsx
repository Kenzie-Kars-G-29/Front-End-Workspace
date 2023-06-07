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
    display: flex;
/*     flex-direction: column; */
    align-items: flex-end;
    position: absolute;
    top: 100%;
    right: 0;
    display: none;
    background: var(--color-grey10);
    padding: 10px;
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  }

  .menuWrapper.show {
  display: flex;
}
  .menuWrapper button {
    width: 100%;
  }

  @media (min-width: 769px) {
    .divContainer{
      display: flex;
    }
    .menuWrapper {
      display: flex;
      flex-direction: line;
      position: static;
      background: none;
      box-shadow: none;
      padding: 0;
    }

    .menuWrapper button {
      margin: 10px;
    }

    .menuIcon {
      display: none;
    }
  }

  
`;


/* 
const HeaderStyled = styled.header`
  height: 80px;
  width: 100vw;
  background: var(--color-grey10);
  border: 2px solid var(--color-grey6);
  display: flex;
  justify-content: center;

  .divContainer {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-left: 5px;
    width: 100%;
    height: 100%;
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  }

  .divIcons {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .menuIcon {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 24px;
    height: 20px;
    cursor: pointer;
    z-index: 2;
  }

  .menuIcon span {
    width: 100%;
    height: 2px;
    background-color: var(--color-grey6);
  }

  .menuContent {
    display: none;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  .open {
    display: flex;
  }

  @media (min-width: 768px) {
    .divContainer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding: 30px;
    }
    .logo {
      display: block;
    }
    .divIcons {
      width: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 25px;
    }
    .menuIcon {
      display: none;
    }
    .menuContent {
      display: flex;
    }
  }
`; */

export default HeaderStyled;