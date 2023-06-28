import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import UserOverview from "../../components/UserOverview";
import { StyledProfileView, Background } from "./style";
import UserAdsSection from "../../components/UserAdsSection";
import StyledUserOverview from "../../components/UserOverview/style";
import {
  AdsContainer,
  AdsTitle,
  MainContainer,
} from "../../components/UserAdsSection/style";
import { useContext, useEffect } from "react";
import { UserContext } from "../../contexts/User";
import { CardAd } from "../../components/Card";

const ProfileViewUser = () => {
  const {
    getUserId,
    isGetUser,
    isAnnouncements,
    setIsAnnouncements,
    isLoading,
    setIsLoading,
  } = useContext(UserContext);
  const { infosUserLogged, isUserInfo } = useContext(UserContext);

  useEffect(() => {
    const userId = "c0d1f6a9-4271-4a03-895c-e2a1eba0c882";
    getUserId(userId);
  }, []);

  useEffect(() => {
    infosUserLogged();
  }, []);

  return (
    <>
      <Header isUserInfo={isUserInfo} />
      <Background />
      <StyledProfileView>
        <StyledUserOverview>
          <UserOverview />
        </StyledUserOverview>

        <div>
          <MainContainer>
            <AdsTitle>Anúncios</AdsTitle>
            <AdsContainer>
              {!isAnnouncements.length ? (
                <h3>Este usuário ainda não possui nenhum anuncio disponível</h3>
              ) : (
                isAnnouncements.map((announcement) => {
                  return (
                    <CardAd key={announcement.id} announcement={announcement} />
                  );
                })
              )}
            </AdsContainer>
          </MainContainer>
        </div>
      </StyledProfileView>
      <Footer />
    </>
  );
};

export default ProfileViewUser;
