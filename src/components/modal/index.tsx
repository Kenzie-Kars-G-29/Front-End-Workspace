import { ReactNode } from "react";
import StyledModal from "./style";

interface iBaseModalProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: any;
  title: string;
}

const Modal = ({ children, isOpen, onClose, title }: iBaseModalProps) => {
  if (!isOpen) return null;

  const handleBackgroundClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return (
    <StyledModal onClick={handleBackgroundClick}>
      <div className="modal">
        <div className="modal-closeModalContainer">
          <p>{title}</p>
          <button onClick={onClose}>X</button>
        </div>

        <div className="modal-content">{children}</div>
      </div>
    </StyledModal>
  );
};

export default Modal;
