import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import StyledHome from "./style";
import AsideMobile from "../../components/Asides/AsideMobile";
import Button from "../../components/Button/Button";
import { AsideContext } from "../../contexts/AsideContext";
import { useContext, useEffect } from "react";
import AsideDesktop from "../../components/Asides/AsideDesktop";
import { CardAd } from "../../components/Card";
import { UserContext } from "../../contexts/User";

const Home = () => {
  const { showAside, setShowAside } = useContext(AsideContext);
  const {
    infosUserLogged,
    isUserInfo,
    isLoadingAnnouncement,
    listAnnouncements,
    isDataAnnouncement,
    filteredAnnouncements,
  } = useContext(UserContext);

  useEffect(() => {
    infosUserLogged();
    listAnnouncements();
  }, []);

  return (
    <>
      <Header isUserInfo={isUserInfo} />
      <StyledHome>
        {showAside && <AsideMobile />}

        <div className="subHeader">
          <h2>Motors Shop</h2>
          <p>A melhor plataforma de anúncios de carros do país</p>
        </div>

        <section>
          <AsideDesktop />
          {isLoadingAnnouncement ? (
            <h1>Carregando</h1>
          ) : (
            <>
              <ul>
                {/* {!filteredAnnouncements.length ? (
                  <h3>
                    A plataforma ainda não possui nenhum anuncio disponível
                  </h3>
                ) : (
                  filteredAnnouncements.map((announcement) => {
                    return <CardAd key={announcement.id} announcement={announcement} />;
                  })
                )} */}

                {!isDataAnnouncement.length ? (
                  <h3>
                    A plataforma ainda não possui nenhum anuncio disponível
                  </h3>
                ) : (
                  isDataAnnouncement.map((announcement) => {
                    return <CardAd announcement={announcement} />;
                  })
                )}
              </ul>
            </>
          )}
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
