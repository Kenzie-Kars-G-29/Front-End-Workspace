import { ToastContainer } from "react-toastify";
import { AsideProvider } from "../contexts/AsideContext";
import { SellerProvider } from "../contexts/Seller";
import RoutesMain from "../routes/routes";
import { UserProvider } from "../contexts/User";

const App = () => {
  return (
    <>
      <AsideProvider>
        <UserProvider>
          <SellerProvider>
            <ToastContainer />
            <RoutesMain />
          </SellerProvider>
        </UserProvider>
      </AsideProvider>
    </>
  );
};

export default App;
