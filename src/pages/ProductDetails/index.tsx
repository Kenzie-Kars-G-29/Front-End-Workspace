import React, { useContext, useEffect, useState } from "react";
import StyledProductDetails from "./style";
import ProductInfoCard from "../../components/ProductInfoCard/index";
import DescriptionCard from "../../components/DescriptionCard/index";
import CommentsCard, { Comment } from "../../components/CommentsCard/index";
import AuthorCard from "../../components/AuthorCard/index";
import image1 from "../../assets/EXTERIOR-frontSidePilotNear-1653845164710-removebg-preview 1.png";
import image2 from "../../assets/EXTERIOR-frontSidePilotNear-1653845164710-removebg.png";
import image3 from "../../assets/EXTERIOR-frontSidePilotNear-1653845164710.png";
import image4 from "../../assets/EXTERIOR-frontSidePilotNear-1653845164710.png";
import MainImage from "../../components/MainImage/index";
import image5 from "../../assets/EXTERIOR-frontSidePilotNear-1653845164710.png";
import ImageGallery from "../../components/ImageGallery";
import image6 from "../../assets/EXTERIOR-frontSidePilotNear-1653845164710.png";
import { Header } from "../../components/Header/Header";
import { UserContext } from "../../contexts/User";
import api from "../../services/api";
import { useParams } from "react-router";

const ProductDetailsPage: React.FC = () => {
  const { announcementId } = useParams<{ announcementId: string }>();
  const images = [image1, image2, image3, image4, image5, image6];
  const [comments, setComments] = useState<Comment[]>([]);

  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [description, setDescription] = useState("");

  const { isUserInfo, infosUserLogged } = useContext(UserContext);

  const handleImageClick = (newImage: string) => {
    setSelectedImage(newImage);
  };

  useEffect(() => {
    infosUserLogged();
  }, []);

  useEffect(() => {
    api
      .get(`/comments/announcement/${announcementId}`)
      .then((response) => setComments(response.data));
  }, [announcementId]);

  const product = {
    name: "Nome do produto",
    year: 2023,
    mileage: 10000,
    price: 20000,
  };

  const author = {
    name: "Autor",
    bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
  };
  return (
    <>
      <Header isUserInfo={isUserInfo} />
      <StyledProductDetails>
        <div className="content">
          <div className="left-column">
            <MainImage image={selectedImage} />
            <ProductInfoCard product={product} />
            <DescriptionCard description={description} />
            <CommentsCard comments={comments} announcementId={announcementId} />
          </div>
          <div className="right-column">
            <ImageGallery
              images={images.slice(1)}
              onImageClick={handleImageClick}
            />
            <AuthorCard author={author} />
          </div>
        </div>
      </StyledProductDetails>
    </>
  );
};

/* const ProductDetailsPage: React.FC = () => {
  const images = [image1, image2, image3, image4, image5, image6];

  const [selectedImage, setSelectedImage] = useState(images[0]);
  const { isUserInfo, infosUserLogged } = useContext(UserContext);

  const handleImageClick = (newImage: string) => {
    setSelectedImage(newImage);
  };

  useEffect(() => {
    infosUserLogged();
  }, []);

  const product = {
    name: "Nome do produto",
    year: 2023,
    mileage: 10000,
    price: 20000,
  };
  const description =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of";
  const comments = [
    {
      name: "João",
      time: "1 hora atrás",
      comment:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      name: "Maria",
      time: "2 dias atrás",
      comment:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
  ];
  const author = {
    name: "Autor",
    bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
  };

  return (
    <>
      <Header isUserInfo={isUserInfo} />
      <StyledProductDetails>
        <div className="content">
          <div className="left-column">
            <MainImage image={selectedImage} />{" "}
            <ProductInfoCard product={product} />
            <DescriptionCard description={description} />
            <CommentsCard comments={comments} />
          </div>
          <div className="right-column">
            <ImageGallery
              images={images.slice(1)}
              onImageClick={handleImageClick}
            />{" "}
            <AuthorCard author={author} />
          </div>
        </div>
      </StyledProductDetails>
    </>
  );
}; */

export default ProductDetailsPage;
