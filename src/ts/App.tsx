import { AsideProvider } from "../contexts/AsideContext";
import RoutesMain from "../routes/routes";

const App = () => {
  return (
    <>
      <AsideProvider>
        <RoutesMain />
      </AsideProvider>
    </>
  );
};

export default App;
