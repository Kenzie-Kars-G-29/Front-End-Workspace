import React from "react";
import StyledProductDetails from "./style";
import ProductInfoCard from "../../components/ProductInfoCard/index";
import DescriptionCard from "../../components/DescriptionCard/index";
import CommentsCard from "../../components/CommentsCard/index";
import AuthorCard from "../../components/AuthorCard/index";
import image1 from "../../assets/EXTERIOR-frontSidePilotNear-1653845164710-removebg-preview 1.png";
import image2 from "../../assets/EXTERIOR-frontSidePilotNear-1653845164710-removebg.png";
import image3 from "../../assets/EXTERIOR-frontSidePilotNear-1653845164710.png";
import image4 from "../../assets/EXTERIOR-frontSidePilotNear-1653845164710.png";
import MainImage from "../../components/MainImage/index";
import image5 from "../../assets/EXTERIOR-frontSidePilotNear-1653845164710.png";
import ImageGallery from "../../components/ImageGallery";
import image6 from "../../assets/EXTERIOR-frontSidePilotNear-1653845164710.png";

const ProductDetailsPage: React.FC = () => {
  const images = [image1, image2, image3, image4, image5, image6];
  const product = {
    name: "Nome do produto",
    year: 2023,
    mileage: 10000,
    price: 20000,
  }; 
  const description = "Esta é a descrição do produto"; 
  const comments = [
    {
      name: "João",
      time: "1 hora atrás",
      comment: "Este produto é ótimo!",
    },
    {
      name: "Maria",
      time: "2 dias atrás",
      comment: "Adorei este produto!",
    },
  ]; 
  const author = {
    name: "Autor",
    bio: "Esta é a bio do autor",
  }; 

  return (
    <StyledProductDetails>
      
        <div className="left-column">
          <h1>Página de Detalhes do Produto</h1>
          <MainImage image={images[0]} />
          <ProductInfoCard product={product} />
          <DescriptionCard description={description} />
          <CommentsCard comments={comments} />
        </div>
        <div className="right-column">
          <ImageGallery images={images.slice(1)} />
          <AuthorCard author={author} />
        </div>
     
    </StyledProductDetails>
  );
};

export default ProductDetailsPage;
