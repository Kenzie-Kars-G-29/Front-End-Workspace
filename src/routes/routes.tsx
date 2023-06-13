import { Routes, Route } from "react-router-dom";
import ProductDetailsPage from "../pages/ProductDetails";
import Home from "../pages/home";
import Profile from "../pages/Profile";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/announcement" element={<ProductDetailsPage />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default RoutesMain;
