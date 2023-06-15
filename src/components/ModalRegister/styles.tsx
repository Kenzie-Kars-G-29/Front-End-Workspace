import styled from "styled-components";

export const ModalRegister = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  .modal {
    background-color: #fff;
    width: 400px;
    padding: 20px;
    border-radius: 5px;
  }
  /*  .modal.open {
    display: block;
  } */

  .modal-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 18px;

    h3 {
      margin-top: 0;
    }

    .divClose {
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
    }
  }
`;
