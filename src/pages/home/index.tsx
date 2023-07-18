import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import StyledHome from "./style";
import AsideMobile from "../../components/Asides/AsideMobile";
import Button from "../../components/Button/Button";
import { AsideContext } from "../../contexts/AsideContext";
import { useContext, useEffect, useState } from "react";
import AsideDesktop from "../../components/Asides/AsideDesktop";
import CardAd from "../../components/Card";
import { UserContext } from "../../contexts/User";

const Home = () => {
  const { showAside, setShowAside } = useContext(AsideContext);
  const { filteredAnnouncements } = useContext(UserContext);
  const {
    infosUserLogged,
    isLoadingAnnouncement,
    listAnnouncements,
    isDataAnnouncement,
  } = useContext(UserContext);
  const [announcementWithFilter, setAnnouncementWithFilter] =
    useState<boolean>(false);
  const [announcementWithoutFilter, setAnnouncementWithoutFilter] =
    useState<boolean>(false);
  const [notAnnouncement, setNotAnnouncement] = useState<boolean>(false);

  useEffect(() => {
    const renderAnnouncements = () => {
      if (filteredAnnouncements.length > 0) {
        // Mostrar anuncios filtrados
        setAnnouncementWithoutFilter(false);
        setAnnouncementWithFilter(true);
      } else if (isDataAnnouncement) {
        // Mostrar todos os anuncios
        setNotAnnouncement(false);
        setAnnouncementWithoutFilter(true);

        if (isDataAnnouncement.length < 1) setNotAnnouncement(true);
      }
    };
    
    renderAnnouncements();
  }, [filteredAnnouncements, isDataAnnouncement]);

  useEffect(() => {
    infosUserLogged();
    listAnnouncements();
  }, []);

  return (
    <>
      <Header />
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
                {announcementWithFilter &&
                  filteredAnnouncements.map((announcement) => {
                    return (
                      <CardAd
                        key={announcement.id}
                        announcement={announcement}
                      />
                    );
                  })}

                {announcementWithoutFilter &&
                  isDataAnnouncement.map((announcement) => {
                    return (
                      <CardAd
                        key={announcement.id}
                        announcement={announcement}
                      />
                    );
                  })}

                {notAnnouncement && (
                  <h3>
                    A plataforma ainda não possui nenhum anuncio disponível
                  </h3>
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
