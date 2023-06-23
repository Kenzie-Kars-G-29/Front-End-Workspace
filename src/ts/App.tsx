import { ToastContainer } from "react-toastify";
import { AsideProvider } from "../contexts/AsideContext";
import RoutesMain from "../routes/routes";

const App = () => {
  return (
    <>
      <AsideProvider>
        <ToastContainer />
        <RoutesMain />
      </AsideProvider>
    </>
  );
};

export default App;
