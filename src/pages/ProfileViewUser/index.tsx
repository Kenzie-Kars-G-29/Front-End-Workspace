import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { StyledProfileView, Background } from "./style";
import StyledUserOverview from "../../components/UserOverview/style";
import {
  AdsContainer,
  AdsTitle,
  MainContainer,
} from "../../components/UserAdsSection/style";
import { useContext, useEffect } from "react";
import { UserContext } from "../../contexts/User";
import CardAd from "../../components/Card";
import { useParams } from "react-router";

const ProfileViewUser = () => {
  const { userId } = useParams<{ userId: any }>();

  const {
    getUserId,
    isGetUser,
    isAnnouncements,
    isLoading,
  } = useContext(UserContext);

  useEffect(() => {
    getUserId(userId);
  }, []);

  const firstLetter = isGetUser?.name.charAt(0).toUpperCase();

  return (
    <>
      <Header/>
      <Background />
      <StyledProfileView>
        <StyledUserOverview>
          {isLoading ? (
            <h2>Carregando</h2>
          ) : (
            <>
              <div className="user-image">{firstLetter}</div>
              <div className="user-info">
                <h2>
                  {isGetUser?.name}
                  <span>Anunciante</span>
                </h2>

                <p>{isGetUser?.description}</p>
              </div>
            </>
          )}
        </StyledUserOverview>

        <div>
          <MainContainer>
            <AdsTitle>Anúncios</AdsTitle>
            <AdsContainer>
              {isLoading ? (
                <h2>Carregando</h2>
              ) : (
                <>
                  {!isAnnouncements.length ? (
                    <h3>
                      Este usuário ainda não possui nenhum anuncio disponível
                    </h3>
                  ) : (
                    isAnnouncements.map((announcement) => {
                      return (
                        <CardAd
                          key={announcement.id}
                          announcement={announcement}
                        />
                      );
                    })
                  )}
                </>
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
