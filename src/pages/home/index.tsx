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
      <StyledHome>
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
    </>
  );
};

export default Home;
