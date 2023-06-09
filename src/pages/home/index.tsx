import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { CardAd } from "../../components/Card";
import StyledHome from "./style";
import AsideMobile from "../../components/Asides/AsideMobile";
import Button from "../../components/Button/Button";
import { AsideContext } from "../../contexts/AsideContext";
import { useContext } from "react";
import AsideDesktop from "../../components/Asides/AsideDesktop";

const Home = () => {
  const { showAside, setShowAside } = useContext(AsideContext);
  return (
    <>
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
