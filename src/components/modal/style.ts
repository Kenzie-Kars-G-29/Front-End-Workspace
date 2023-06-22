import styled from "styled-components";

const StyledModal = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  z-index: +9999;
  display: flex;
  justify-content: center;
  padding: 20px 10px;
  overflow: auto;

  .modal {
    width: 100%;
    max-width: 32.5rem;
    min-height: 72.125rem;
    padding: 1rem 1.5rem;
    margin: 10px;
    background-color: white;
    border-radius: 0.5rem;
    overflow: hidden;
  }
  .modal-closeModalContainer {
    width: 100%;
    height: 3.5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  .modal-closeModalContainer p {
    font-size: var(--font-body-1);
    font-weight: var(--font-weight-500);
    color: var(--color-grey0);
  }
  .modal-closeModalContainer button {
    font-size: var(--font-heading-6);
    color: var(--color-grey4);
    font-weight: var(--font-weight-500);
  }

  .modal-closeModalContainer button:hover {
    color: var(--color-grey0);
    transition: all.5s;
  }
`;

export default StyledModal;
