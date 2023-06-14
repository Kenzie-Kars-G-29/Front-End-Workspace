import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.25s ease;
`;

const StyledModal = styled.div`
  background: white;
  padding: 20px;
  border-radius: 4px;
  width: 70%;
  max-width: 500px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  .modal-header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
  }
  h1 {
    font-family: Lexend;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
    color: var(--color-grey1);
  }
  img {
    width: 90%;
    background-color: var(--color-grey7);
  }
`;

export default StyledModal;
