import React from "react";
import StyledDescriptionCard from "./style";

interface DescriptionCardProps {
  description: string;
}

const DescriptionCard: React.FC<DescriptionCardProps> = ({ description }) => {
  return (
    <StyledDescriptionCard>
      <h2>Descrição</h2>
      <p>{description}</p>
    </StyledDescriptionCard>
  );
};

export default DescriptionCard;
