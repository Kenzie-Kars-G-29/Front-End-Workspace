import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import UserOverview from "../../components/UserOverview";
import {StyledProfileView, Background} from './style';
import UserAdsSection from '../../components/UserAdsSection';
import { useContext } from "react";
import { UserContext } from "../../contexts/User";



const ProfileViewAdmin = () => {
  const { isUserInfo } = useContext(UserContext);

  return (
    <>
      <Header isUserInfo={isUserInfo}/>
      <Background />
      <StyledProfileView>
        <UserOverview />
        <UserAdsSection />
      </StyledProfileView>
      <Footer/>
    </>
  );
};

export default ProfileViewAdmin;
