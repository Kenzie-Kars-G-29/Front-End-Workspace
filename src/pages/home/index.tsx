import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import StyledHome from "./style";
import AsideMobile from "../../components/Asides/AsideMobile";
import Button from "../../components/Button/Button";
import { AsideContext } from "../../contexts/AsideContext";
import { useContext, useEffect, useState } from "react";
import AsideDesktop from "../../components/Asides/AsideDesktop";
import api from "../../services/api";
import { CardAd } from "../../components/Card";


interface AnnouncementInfo {
  id: string;
  description: string;
  brand: string;
  model: string;
  color: string;
  year: string;
  fuel: string;
  km: string;
  price: string;
  fipeTablePrice: string;
  isPublic: boolean;
  images: {
    id: string;
    coverImage: string;
    firstImage: string | null;
    secondImage: string | null;
    thirdImage: string | null;
    fourthImage: string | null;
    fifthImage: string | null;
    sixthImage: string | null;
  };
  user: {
    id: string;
    name: string;
  };
}

const Home = () => {
  const { showAside, setShowAside } = useContext(AsideContext);
  const [isDataAnnoun, setIsDataAnnoun] = useState<AnnouncementInfo[]>([]);


    const listAnnouncements = async () => {
    try {
      const response = await api.get("/announcement");

      const announData = response.data;

      setIsDataAnnoun(announData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
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
          <ul>
            {!isDataAnnoun.length ? <h3>A plataforma ainda não possui nenhum anuncio disponível</h3>: 
            isDataAnnoun.map(announcement => (<CardAd announcement={announcement}/>))}
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
