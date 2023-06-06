import { CardAd } from "../../components/Card";
import StyledHome from "./style";


const Home = () => {
  return (
    <StyledHome>
      <h1> Home page </h1>
      
      <div className="subHeader">
        <h2>Motors Shop</h2>
        <p>A melhor plataforma de anúncios de carros do país</p>
      </div>

      <section>
        <ul>
          <CardAd/>
          <CardAd/>
        </ul>
      </section>
    </StyledHome>
  );
};

export default Home;
