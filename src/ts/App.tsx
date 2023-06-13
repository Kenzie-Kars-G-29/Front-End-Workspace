import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { AsideProvider } from "../contexts/AsideContext";
import { UserProvider } from "../contexts/UserContext";
import RoutesMain from "../routes/routes";

const App = () => {
  return (
    <>
      <UserProvider>
        <AsideProvider>
          <Header />
          <RoutesMain />
          <Footer />
        </AsideProvider>
      </UserProvider>
    </>
  );
};

export default App;
