import { Routes, Route } from "react-router-dom";
import ProductDetailsPage from "../pages/ProductDetails";
import Home from "../pages/home";
import Signin from "../pages/signin";
import Register from "../pages/register";
import ProfileViewUser from "../pages/ProfileViewUser";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Home />} />
      <Route path="/announcement" element={<ProductDetailsPage />} />
      <Route path="/signin" element={<Signin/>} />
      <Route path="/ProfileViewUser" element={<ProfileViewUser/>} />
    </Routes>
  );
};

export default RoutesMain;
