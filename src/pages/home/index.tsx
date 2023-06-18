import { useContext, useState } from "react";
import AsideDesktop from "../../components/Asides/AsideDesktop";
import AsideMobile from "../../components/Asides/AsideMobile";
import Button from "../../components/Button/Button";
import { CardAd } from "../../components/Card";
import { Footer } from "../../components/Footer/Footer";
import FormCreateAnnouncement from "../../components/FormCreateAnnouncement";
import { Header } from "../../components/Header/Header";
import Modal from "../../components/Modal";
import { AsideContext } from "../../contexts/AsideContext";
import StyledHome from "./style";

const Home = () => {
  const { showAside, setShowAside } = useContext(AsideContext);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <Modal isOpen={isOpen} onClose={handleClose} title="Criar anuncio">
        <FormCreateAnnouncement />
      </Modal>
      <Header />
      <StyledHome>
        <h1> Home page </h1>
        {showAside && <AsideMobile />}

        <div className="subHeader">
          <h2>Motors Shop</h2>
          <p>A melhor plataforma de anúncios de carros do país</p>
        </div>

        <section>
          <AsideDesktop />
          <ul>
            <CardAd />
            <CardAd />
            <Button variant="brand" onClick={handleOpen}>
              modal de criar announcement
            </Button>
          </ul>
        </section>
        <div>
          <Button variant="brand" onClick={() => setShowAside(true)}>
            Filtro
          </Button>
        </div>
      </StyledHome>
      <Footer />
    </>
  );
};

export default Home;
