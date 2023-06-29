import { ToastContainer } from "react-toastify";
import { AsideProvider } from "../contexts/AsideContext";
import { SellerProvider } from "../contexts/Seller";
import RoutesMain from "../routes/routes";
import { UserProvider } from "../contexts/User";

const App = () => {
  return (
    <>
      <AsideProvider>
        <SellerProvider>
          <UserProvider>
            <ToastContainer />
            <RoutesMain />
          </UserProvider>
        </SellerProvider>
      </AsideProvider>
    </>
  );
};

export default App;
