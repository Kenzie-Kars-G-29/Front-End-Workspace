import React from "react";
import StyledImageGallery from "./style";

interface ImageGalleryProps {
  images: string[];
  onImageClick: (image: string) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  onImageClick,
}) => {
  return (
    <StyledImageGallery>
      <h2>Fotos</h2>
      <div>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Imagem secundária ${index + 1}`}
            onClick={() => onImageClick(image)}
          />
        ))}
      </div>
    </StyledImageGallery>
  );
};

export default ImageGallery;
