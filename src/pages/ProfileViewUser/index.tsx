import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import UserOverview from "../../components/UserOverview";
import { StyledProfileView, Background } from "./style";
import UserAdsSection from "../../components/UserAdsSection";
import { UserContext } from "../../contexts/User";
import { useContext, useEffect } from "react";

const ProfileViewUser = () => {
  const { infosUserLogged, isUserInfo } = useContext(UserContext);

  useEffect(() => {
    infosUserLogged();
  }, []);

  return (
    <>
      <Header isUserInfo={isUserInfo} />
      <Background />
      <StyledProfileView>
        <UserOverview />
        <UserAdsSection />
      </StyledProfileView>
      <Footer />
    </>
  );
};

export default ProfileViewUser;
