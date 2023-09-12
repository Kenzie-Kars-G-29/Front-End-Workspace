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
import { AnnouncementInfo } from "../../contexts/User/interfaces";

const Home = () => {
  const { showAside, setShowAside } = useContext(AsideContext);
  const { filteredAnnouncements } = useContext(UserContext);
  const {
    infosUserLogged,
    isLoadingAnnouncement,
    listAnnouncements,
    isDataAnnouncement,
  } = useContext(UserContext);
  const [listMaster, setListMaster] = useState<AnnouncementInfo[]>([]);

  useEffect(() => {
    if (filteredAnnouncements.length > 0) {
      setListMaster(filteredAnnouncements);
    } else {
      setListMaster(isDataAnnouncement);
    }
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
                {listMaster.length > 0 ? (
                  listMaster.map((announcement) => {
                    return (
                      <CardAd
                        key={announcement.id}
                        announcement={announcement}
                      />
                    );
                  })
                ) : (
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
