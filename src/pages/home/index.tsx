import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import StyledHome from "./style";

const Home = () => {
  return (
    <>
     <Header/> 
     <StyledHome>
        <h1> Home page </h1>
      </StyledHome>
      <Footer/>
    </>
    
  );
};

export default Home;
