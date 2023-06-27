import { useState } from "react";
import Button from "../Button/Button";
import FormCreateAnnouncement from "../FormCreateAnnouncement";
import Modal from "../modal";
import StyledUserOverview from "./style";
import FormProfileConfig from "../FormProfileConfig";
import FormAddressUpdate from "../FormAddressUpdate";

const UserOverview = () => {
  const [isOpenFormCreateAnnouncement, setIsOpenFormCreateAnnouncement] =
    useState<boolean>(false);
  const [isOpenFormProfileConfig, setIsOpenFormProfileConfig] =
    useState<boolean>(false);
  const [isOpenFormAddressUpdate, setIsOpenFormAddressUpdate] =
    useState<boolean>(false);

  const handleOpenFormCreateAnnouncement = () =>
    setIsOpenFormCreateAnnouncement(true);
  const handleCloseFormCreateAnnouncement = () =>
    setIsOpenFormCreateAnnouncement(false);

  const handleOpenFormProfileConfig = () => setIsOpenFormProfileConfig(true);
  const handleCloseFormProfileConfig = () => setIsOpenFormProfileConfig(false);

  const handleOpenFormAddressUpdate = () => setIsOpenFormAddressUpdate(true);
  const handleCloseFormAddressUpdate = () => setIsOpenFormAddressUpdate(false);

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

      <Modal
        isOpen={isOpenFormAddressUpdate}
        onClose={handleCloseFormAddressUpdate}
        title="Editar endereço"
      >
        <FormAddressUpdate onClose={handleCloseFormAddressUpdate} />
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

          <div className="buttonContainer">
            <Button
              variant="brand"
              onClick={() => handleOpenFormCreateAnnouncement()}
            >
              Criar anúncio
            </Button>

            <Button
              variant="brand"
              onClick={() => handleOpenFormProfileConfig()}
            >
              Editar perfil
            </Button>

            <Button
              variant="brand"
              onClick={() => handleOpenFormAddressUpdate()}
            >
              Editar endereço
            </Button>
          </div>
        </div>
      </StyledUserOverview>
    </>
  );
};

export default UserOverview;
