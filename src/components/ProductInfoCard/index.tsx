import React from "react";
import StyledProductInfoCard from "./style";

interface Product {
  name: string;
  year: number;
  mileage: number;
  price: number;
}

interface ProductInfoCardProps {
  product: Product;
}

const ProductInfoCard: React.FC<ProductInfoCardProps> = ({ product }) => {
  return (
    <StyledProductInfoCard>
      <h2>{product.name}</h2>
      <div className="info">
        <div className="details">
          <div className="span">
            <span> {product.year}</span>
            <span> {product.mileage} KM</span>
          </div>
        </div>
        <div className="price">R$ {product.price}</div>
      </div>
      <button className="cta-button">Comprar</button>
    </StyledProductInfoCard>
  );
};

export default ProductInfoCard;
