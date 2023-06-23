import { CardAd } from '../../components/Card/index';
import { MainContainer, AdsContainer, CardContainer, AdsTitle } from './style';

type Ad = {
    id: number;
    image?: string;
    title?: string;
    description?: string;
    userInitials?: string;
    userName?: string;
    mileage?: number;
    year?: number;
    price?: string;
};

const UserAdsSection: React.FC<{ ads: Ad[] }> = ({ ads }) => {
  return (
    <MainContainer>
      <AdsTitle>Anúncios</AdsTitle>
      <AdsContainer>
        {ads.map((ad) => (
          <CardContainer key={ad.id}>
            <CardAd />
          </CardContainer>
        ))}
      </AdsContainer>
    </MainContainer>
  );
};

export default UserAdsSection;
