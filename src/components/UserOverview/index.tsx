import { useState } from "react";
import Button from "../Button/Button";
import FormCreateAnnouncement from "../FormCreateAnnouncement";
import Modal from "../modal";
import StyledUserOverview from "./style";

const UserOverview = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <Modal isOpen={isOpen} onClose={handleClose} title="Criar anuncio">
        <FormCreateAnnouncement onClose={handleClose} />
      </Modal>
      <StyledUserOverview>
        <div className="user-image" />
        <div className="user-info">
          <h2>
            Nome do Usuário
            <span>Anunciante</span>
          </h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>

          <Button variant="brand" onClick={() => handleOpen()}>
            Criar anuncio
          </Button>
        </div>
      </StyledUserOverview>
    </>
  );
};

export default UserOverview;
