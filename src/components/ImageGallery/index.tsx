import React from 'react';
import StyledImageGallery from './style';

interface ImageGalleryProps {
  images: string[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  return (
    <StyledImageGallery>
      <h2>Fotos</h2>
      <div>
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Imagem secundária ${index + 1}`} />
        ))}
      </div>
    </StyledImageGallery>
  );
};

export default ImageGallery;
