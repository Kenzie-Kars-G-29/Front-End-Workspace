import { ReactNode } from "react";
import StyledBaseModal from "./style";

interface iBaseModalProps {
  children: ReactNode;
}

const BaseModal = ({ children }: iBaseModalProps) => {
  return (
    <StyledBaseModal>
      <div className="modal">
        <div className="modal-closeModalContainer">
          <a>X</a>
        </div>

        <div className="modal-content">{children}</div>
      </div>
    </StyledBaseModal>
  );
};

export default BaseModal;
