import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import UserOverview from "../../components/UserOverview";
import { StyledProfileView, Background } from "./style";
import UserAdsSection from "../../components/UserAdsSection";
import { UserContext } from "../../contexts/User";
import { useContext } from "react";

const ProfileViewUser = () => {
  const isUserInfo = useContext(UserContext);

  return (
    <>
      <Header key={"teste"} isUserInfo={isUserInfo} />
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
