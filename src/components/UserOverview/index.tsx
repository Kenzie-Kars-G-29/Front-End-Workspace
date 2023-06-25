import { useState } from "react";
import Button from "../Button/Button";
import FormCreateAnnouncement from "../FormCreateAnnouncement";
import Modal from "../modal";
import StyledUserOverview from "./style";
import FormProfileConfig from "../FormProfileConfig";

const UserOverview = () => {
  const [isOpenFormCreateAnnouncement, setIsOpenFormCreateAnnouncement] =
    useState(false);
  const [isOpenFormProfileConfig, setIsOpenFormProfileConfig] = useState(false);

  const handleOpenFormCreateAnnouncement = () =>
    setIsOpenFormCreateAnnouncement(true);
  const handleCloseFormCreateAnnouncement = () =>
    setIsOpenFormCreateAnnouncement(false);

  const handleOpenFormProfileConfig = () => setIsOpenFormProfileConfig(true);
  const handleCloseFormProfileConfig = () => setIsOpenFormProfileConfig(false);

  return (
    <>
      <Modal
        isOpen={isOpenFormCreateAnnouncement}
        onClose={handleCloseFormCreateAnnouncement}
        title="Criar anuncio"
      >
        <FormCreateAnnouncement onClose={handleCloseFormCreateAnnouncement} />
      </Modal>

      <Modal
        isOpen={isOpenFormProfileConfig}
        onClose={handleCloseFormProfileConfig}
        title="Editar perfil"
      >
        <FormProfileConfig onClose={handleCloseFormProfileConfig} />
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

          <Button variant="brand" onClick={() => handleOpenFormCreateAnnouncement()}>
            Criar anúncio
          </Button>
          <Button variant="brand" onClick={() => handleOpenFormProfileConfig()}>
            Editar perfil
          </Button>
        </div>
      </StyledUserOverview>
    </>
  );
};

export default UserOverview;
