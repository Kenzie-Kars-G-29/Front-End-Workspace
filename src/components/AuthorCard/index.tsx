import React from 'react';
import StyledAuthorCard from './style';
import Button from '../Button/Button';
import { useNavigate } from 'react-router';

interface Author {
  name: string;
  bio: string;
}

interface AuthorCardProps {
  author: Author;
}

const AuthorCard: React.FC<AuthorCardProps> = ({ author }) => {
  const navigate = useNavigate()

  return (
    <StyledAuthorCard>
      <div className="author-image">
        <img src="profilePictureUrl" alt={`${author.name}`} /> 
      </div>
      <div className="author-name">
        <h2>{author.name}</h2>
      </div>
      <div className="author-bio">
        <p>{author.bio}</p>
      </div>
      <div className="author-button">
        <Button variant="black" onClick={() => navigate("/ProfileViewUser")}>Ver todos os anúncios</Button>
      </div>
    </StyledAuthorCard>
  );
};

export default AuthorCard;
