import { ToastContainer } from "react-toastify";
import { AsideProvider } from "../contexts/AsideContext";
import { SellerProvider } from "../contexts/Seller";
import RoutesMain from "../routes/routes";

const App = () => {
  return (
    <>
      <AsideProvider>
        <SellerProvider>
          <ToastContainer />
          <RoutesMain />
        </SellerProvider>
      </AsideProvider>
    </>
  );
};

export default App;
