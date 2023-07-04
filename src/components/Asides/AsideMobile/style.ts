import styled from "styled-components";

const StyledAside = styled.aside`
  background-color: var(--color-whiteFixed);
  width: 100vw;
  padding: 16px;
  position: absolute;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 56px;

    > h5 {
      font-size: var(--font-heading-7);
      font-weight: var(--font-weight-500);
      color: var(--color-grey0);
    }

    > button {
      font-size: var(--font-heading-7);
      color: var(--color-grey3);
      padding: 5px;
    }
  }

  > nav {
    > form, section {
      > h3 {
        font-size: var(--font-heading-3);
        font-weight: var(--font-weight-600);
        color: var(--color-grey0);
      }

      > ul {
        display: flex;
        flex-direction: column;
        margin: 24px 0;
        padding-left: 10px;
        gap: 5px;

        > li {
          font-size: var(--font-heading-6);
          font-weight: var(--font-weight-500);
          color: var(--color-grey3);
        }
      }

      > div {
        display: flex;
        justify-content: space-between;
        margin: 24px 0;
        padding-left: 10px;

        > input {
          background-color: var(--color-grey5);
          color: var(--color-grey1);
          width: 45%;
          padding: 10px;
        }
      }
    }

    > button {
      width: 100%;
      padding: 15px;
    }
  }
`;

export { StyledAside };
