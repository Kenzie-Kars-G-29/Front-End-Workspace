import styled from "styled-components";

const StyledBaseModal = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  z-index: +1;
  display: flex;
  justify-content: center;
  align-items: center;

  .modal {
    width: 100%;
    max-width: 520px;
    height: 18.75rem;
    background-color: white;
    border-radius: 0.5rem;
    overflow: hidden;
  }
  .modal-closeModalContainer {
    width: 100%;
    height: 3.5rem;
  }
  .modal-closeModalContainer a {
  }
  .modal-closeModalContainer p {
  }
  .modal-content {
  }
`;

export default StyledBaseModal;
