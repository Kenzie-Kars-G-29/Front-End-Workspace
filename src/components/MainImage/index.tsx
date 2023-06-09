import React from 'react';
import StyledMainImage from './style';

interface MainImageProps {
  image: string;
}

const MainImage: React.FC<MainImageProps> = ({ image }) => {
  return (
    <StyledMainImage>
      <img src={image} alt="Imagem principal" />
    </StyledMainImage>
  );
};

export default MainImage;
