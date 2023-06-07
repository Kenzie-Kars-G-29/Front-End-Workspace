import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { CardAd } from "../../components/Card";
import StyledHome from "./style";

const Home = () => {
  return (
    <>
      <Header />
      <StyledHome>
        <h1> Home page </h1>

        <div className="subHeader">
          <h2>Motors Shop</h2>
          <p>A melhor plataforma de anúncios de carros do país</p>
        </div>

        <section>
          <ul>
            <CardAd />
            <CardAd />
          </ul>
        </section>
      </StyledHome>
      <Footer />
    </>
  );
};

export default Home;
