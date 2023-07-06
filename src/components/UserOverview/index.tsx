import { useContext, useEffect, useState } from "react";
import Button from "../Button/Button";
import FormCreateAnnouncement from "../FormCreateAnnouncement";
import FormProfileConfig from "../FormProfileConfig";
import FormAddressUpdate from "../FormAddressUpdate";
import StyledUserOverview from "./style";
import Modal from "../modal";
import { UserContext } from "../../contexts/User";

const UserOverview = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { infosUserLogged, isUserInfo } = useContext(UserContext);

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

  useEffect(() => {
    infosUserLogged();
    setIsLoading(false);
  }, []);

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
        {isLoading ? (
          <h1>Carregando</h1>
        ) : (
          <>
            <div className="user-image" />
            <div className="user-info">
              <h2>
                {isUserInfo?.name}
                <span>Anunciante</span>
              </h2>
              
              <p>{isUserInfo?.description}</p>

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
          </>
        )}
      </StyledUserOverview>
    </>
  );
};

export default UserOverview;
