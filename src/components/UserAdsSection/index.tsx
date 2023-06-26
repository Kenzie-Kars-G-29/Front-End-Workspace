import { useContext, useEffect } from 'react';
import { CardAd } from '../../components/Card/index';
import { MainContainer, AdsContainer, AdsTitle } from './style';
import { UserContext } from '../../contexts/User';


const UserAdsSection = () => {
  const {isAnnounUser, infosUserLogged} = useContext(UserContext)

  useEffect(() => {
    infosUserLogged()
  }, []);
  
  return (
    <MainContainer>
      <AdsTitle>Anúncios</AdsTitle>
      <AdsContainer>
        {!isAnnounUser.length ? <h3>Este usuário ainda não possui nenhum anuncio disponível</h3>: 
          isAnnounUser.map(announcement =>  { return <CardAd announcement={announcement}/>})}
      </AdsContainer>
    </MainContainer>
  );
};

export default UserAdsSection;
