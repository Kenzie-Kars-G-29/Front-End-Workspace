import React from "react";
import StyledAuthorCard from "./style";
import Button from "../Button/Button";
import { useNavigate } from "react-router";
import { InfoUser } from "../../contexts/User/interfaces";

interface AuthorCardProps {
  author: InfoUser;
}

const AuthorCard: React.FC<AuthorCardProps> = ({ author }) => {
  const navigate = useNavigate();

  const getInitials = (name: string) => {
    const names = name.split(" ");
    const initials = names
      .map((name) => name.charAt(0))
      .join("")
      .toUpperCase();
    return initials.substring(0, 2);
  };

  return (
    <StyledAuthorCard>
      <div className="author-image">
        <span>{getInitials(author.name)}</span>
      </div>
      <div className="author-name">
        <h2>{author.name}</h2>
      </div>
      <div className="author-bio">
        <p>{author.description}</p>
      </div>
      <div className="author-button">
        <Button
          variant="black"
          onClick={() => navigate(`/ProfileViewUser/${author.id}`)}
        >
          Ver todos os anúncios
        </Button>
      </div>
    </StyledAuthorCard>
  );
};

export default AuthorCard;
