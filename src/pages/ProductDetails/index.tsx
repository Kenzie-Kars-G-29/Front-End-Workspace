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

const ProductDetailsPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState("");
  const [images, setImages] = useState(Array<string>);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
                <CommentsCard comments={comments} />
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
