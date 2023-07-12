import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import UserOverview from "../../components/UserOverview";
import { StyledProfileView, Background } from "./style";
import UserAdsSection from "../../components/UserAdsSection";

const ProfileViewAdmin = () => {
  return (
    <>
      <Header />
      <Background />
      <StyledProfileView>
        <UserOverview />
        <UserAdsSection />
      </StyledProfileView>
      <Footer />
    </>
  );
};

export default ProfileViewAdmin;
