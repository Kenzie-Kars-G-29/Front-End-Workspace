import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import UserOverview from "../../components/UserOverview";
import { StyledProfileView, Background } from "./style";
import UserAdsSection from "../../components/UserAdsSection";
import StyledUserOverview from "../../components/UserOverview/style";
import { AdsContainer, AdsTitle, MainContainer } from "../../components/UserAdsSection/style";
import { useContext, useEffect } from "react";
import { UserContext } from "../../contexts/User";
import { CardAd } from "../../components/Card";

const ProfileViewUser = () => {
  const { getUserId, isGetUser, isAnnouncements, setIsAnnouncements, isLoading, setIsLoading } = useContext(UserContext)
const { infosUserLogged, isUserInfo } = useContext(UserContext);
      
  useEffect(() => {
    const userId = "e56571b1-0265-4a3a-a4d6-a08c02b0c760"
    getUserId(userId)
  }, [])
      
       useEffect(() => {
    infosUserLogged();
  }, []);

  return (
    <>
      <Header isUserInfo={isUserInfo} />
      <Background />
      <StyledProfileView>
      <StyledUserOverview>
        {isLoading? <h1>Carregando</h1> : <>
          <div className="user-image" />
          <div className="user-info">
            <h2>
              {isGetUser?.name}
              <span>Anunciante</span>
            </h2>
            <p>
              {isGetUser?.description}
            </p>
          </div>
        </>}
      </StyledUserOverview>

      <div>
          <MainContainer>
          <AdsTitle>Anúncios</AdsTitle>
          <AdsContainer>
            {!isAnnouncements.length ? <h3>Este usuário ainda não possui nenhum anuncio disponível</h3>: 
              isAnnouncements.map(announcement =>  { return <CardAd announcement={announcement} />})}
          </AdsContainer>
        </MainContainer>
        </div>

      </StyledProfileView>
      <Footer />
    </>
  );
};

export default ProfileViewUser;
