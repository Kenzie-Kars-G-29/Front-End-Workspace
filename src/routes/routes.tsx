import { Routes, Route } from "react-router-dom";
import ProductDetailsPage from "../pages/ProductDetails";
import Home from "../pages/home";
import Register from "../pages/register";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Home />} />
      <Route path="/announcement" element={<ProductDetailsPage />} />
    </Routes>
  );
};

export default RoutesMain;
