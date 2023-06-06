import { CardAd } from "../../components/Card";
import StyledHome from "./style";

const Home = () => {
  return (
    <StyledHome>
      <h1> Home page </h1>

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
