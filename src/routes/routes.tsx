import { Routes, Route } from "react-router-dom";
import ProductDetailsPage from "../pages/ProductDetails";
import Home from "../pages/home";
import Signin from "../pages/signin";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/announcement" element={<ProductDetailsPage />} />
      <Route path="/signin" element={<Signin/>} />
    </Routes>
  );
};

export default RoutesMain;
