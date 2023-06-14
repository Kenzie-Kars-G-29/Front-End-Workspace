import React from "react";
import StyledModal, { ModalOverlay } from "./style";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  const handleBackgroundClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return (
    <ModalOverlay onClick={handleBackgroundClick}>
      <StyledModal>
        <div className="modal-header">
          <h1>Imagem do veículo</h1>
          <button onClick={onClose}>X</button>
        </div>
        {children}
      </StyledModal>
    </ModalOverlay>
  );
};

export default Modal;
