import React, { useContext, useEffect, useState } from "react";
import StyledProductDetails from "./style";
import ProductInfoCard, {
  Images,
} from "../../components/ProductInfoCard/index";
import DescriptionCard from "../../components/DescriptionCard/index";
import CommentsCard from "../../components/CommentsCard/index";
import AuthorCard from "../../components/AuthorCard/index";
import MainImage from "../../components/MainImage/index";
import ImageGallery from "../../components/ImageGallery";
import { Header } from "../../components/Header/Header";
import { UserContext } from "../../contexts/User";
import api from "../../services/api";
import { Car } from "../../components/ProductInfoCard";
import { InfoUser } from "../../contexts/User/interfaces";
import { useParams } from "react-router-dom";
import { Comment } from "../../components/CommentsCard/index";
import { CommentsCardProps } from "../../components/CommentsCard/index";

const ProductDetailsPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState("");
  const [images, setImages] = useState(Array<string>);
  const { announcementId } = useParams<{ announcementId: string }>();
  const [comments, setComments] = useState<Comment[]>([]);
  const { isUserInfo, infosUserLogged } = useContext(UserContext);
  const [car, setCar] = useState({} as Car);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({} as InfoUser);

  const handleImageClick = (newImage: string) => {
    setSelectedImage(newImage);
  };
  const getProduct = async () => {
    const car = await api.get(window.location.pathname);
    setCar(car.data);
    setUser(car.data.user);
    getImages(car.data.image);
    setSelectedImage(car.data.image.coverImage);
    setLoading(false);
  };

  const getImages = (images: Images) => {
    setImages([]);
    const imageValues = Object.values(images);
    imageValues.forEach((value) => {
      if (value !== null) {
        setImages((imagesSeted) => [...imagesSeted, value]);
      }
    });
  };

  useEffect(() => {
    infosUserLogged();
    getProduct();
  }, []);

  useEffect(() => {
    api
      .get(`/comments/announcement/${announcementId}`)
      .then((response) => setComments(response.data));
  }, [announcementId]);

  return (
    <>
      {loading ? (
        <></>
      ) : (
        <>
          <Header isUserInfo={isUserInfo} />
          <StyledProductDetails>
            <div className="content">
              <div className="left-column">
                <MainImage image={selectedImage} />
                <ProductInfoCard car={car} />
                <DescriptionCard description={car.description} />
                <CommentsCard
                  comments={comments}
                  announcementId={announcementId || ""}
                />
              </div>
              <div className="right-column">
                <ImageGallery
                  images={images.slice(1)}
                  onImageClick={handleImageClick}
                />{" "}
                <AuthorCard author={user} />
              </div>
            </div>
          </StyledProductDetails>
        </>
      )}
    </>
  );
};
export default ProductDetailsPage;
