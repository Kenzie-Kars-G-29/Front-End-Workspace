import React from "react";
import StyledProductInfoCard from "./style";
import Button from "../Button/Button";
import { InfoUser } from "../../contexts/User/interfaces";

interface Car {
  id: string;
  description: string;
  model: string;
  color: string;
  brand: string;
  year: string;
  fuel: string;
  km: string;
  price: string;
  fipeTablePrice: string;
  isPublic: boolean;
  user: InfoUser;
  image: Images;
}

interface Images {
  id: string;
  coverImage: string;
  firstImage: string;
  secondImage: string;
  thirdImage: string;
  fourthImage: string;
  fifthImage: string;
  sixthImage: string;
}

interface CarInfoCardProps {
  car: Car;
}

const ProductInfoCard: React.FC<CarInfoCardProps> = ({ car }) => {
  return (
    <StyledProductInfoCard>
      <h2>{car.brand}</h2>
      <div className="info">
        <div className="details">
          <div className="span">
            <span> {car.year}</span>
            <span> {car.km} KM</span>
          </div>
        </div>
        <div className="price">R$ {car.price}</div>
      </div>
      <Button variant="brand">Comprar</Button>
    </StyledProductInfoCard>
  );
};

export default ProductInfoCard;

export type { Car, Images };
