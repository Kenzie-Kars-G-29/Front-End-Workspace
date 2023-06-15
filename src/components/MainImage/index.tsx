import React, { useState } from "react";
import StyledMainImage from "./style";
import Modal from "../ModalProductDetails";

interface MainImageProps {
  image: string;
}

const MainImage: React.FC<MainImageProps> = ({ image }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <StyledMainImage onClick={handleOpen}>
        <img src={image} alt="Imagem principal" />
      </StyledMainImage>
      <Modal isOpen={isOpen} onClose={handleClose}>
        <img src={image} alt="Imagem principal" />
      </Modal>
    </>
  );
};

export default MainImage;
