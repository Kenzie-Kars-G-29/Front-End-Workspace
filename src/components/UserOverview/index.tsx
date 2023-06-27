import { useContext, useEffect, useState } from "react";
import Button from "../Button/Button";
import FormCreateAnnouncement from "../FormCreateAnnouncement";
import StyledUserOverview from "./style";
import Modal from "../modal";
import { UserContext } from "../../contexts/User";

const UserOverview = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { infosUserLogged, isUserInfo } = useContext(UserContext);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  useEffect(() => {
    infosUserLogged();
    setIsLoading(false);
  }, []);

  return (
    <>
      <Modal isOpen={isOpen} onClose={handleClose} title="Criar anuncio">
        <FormCreateAnnouncement onClose={handleClose} />
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
              <Button variant="brand" onClick={() => handleOpen()}>
                Criar anuncio
              </Button>
            </div>
          </>
        )}
      </StyledUserOverview>
    </>
  );
};

export default UserOverview;
