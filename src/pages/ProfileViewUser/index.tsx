import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import UserOverview from "../../components/UserOverview";
import {StyledProfileView, Background} from './style';
import UserAdsSection from '../../components/UserAdsSection';


const dummyAds = [
  { id: 1, title: 'Anúncio 1' },
  { id: 2, title: 'Anúncio 2' },
  { id: 3, title: 'Anúncio 3' },
  { id: 4, title: 'Anúncio 4' },
  { id: 5, title: 'Anúncio 5' },
];


const ProfileViewUser = () => {
  return (
    <>
      <Header/>
      <Background />
      <StyledProfileView>
        <UserOverview />
        <UserAdsSection ads={dummyAds} />
      </StyledProfileView>
      <Footer/>
    </>
  );
};

export default ProfileViewUser;
