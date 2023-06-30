import React, { useContext, useEffect, useState } from "react";
import StyledProductDetails from "./style";
import ProductInfoCard, {
  Images,
} from "../../components/ProductInfoCard/index";
import DescriptionCard from "../../components/DescriptionCard/index";
import CommentsCard, { Comment } from "../../components/CommentsCard/index";
import AuthorCard from "../../components/AuthorCard/index";
import MainImage from "../../components/MainImage/index";
import ImageGallery from "../../components/ImageGallery";
import { Header } from "../../components/Header/Header";
import { UserContext } from "../../contexts/User";
import { useParams } from "react-router";
import api from "../../services/api";
import { Car } from "../../components/ProductInfoCard";
import { InfoUser } from "../../contexts/User/interfaces";

const ProductDetailsPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState("");
  const [images, setImages] = useState(Array<string>);
  const { announcementId } = useParams<{ announcementId: string }>();
  const [comments, setComments] = useState<Comment[]>([]);
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

export default ProductDetailsPage;
