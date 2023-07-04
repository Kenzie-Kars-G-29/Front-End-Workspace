import React from "react";
import StyledCommentsCard from "./style";
import Button from "../Button/Button";
interface Comment {
  name: string;
  time: string;
  comment: string;
}
interface CommentsCardProps {
  comments: Comment[];
}
const CommentsCard: React.FC<CommentsCardProps> = ({ comments }) => {
  const quickMessages = ["Ótimo produto!", "Adorei!", "Vou comprar novamente."];
  return (
    <StyledCommentsCard>
      <div className="comment">
        <h2>Comentários</h2>
        {comments.map((comment, index) => (
          <div className="comment-box" key={index}>
            <div className="user-info-comment">
              <img src="profilePictureUrl" alt={`${comment.name}`} />{" "}
              <p className="name">{comment.name}</p>
              <p>•</p>
              <p>{comment.time}</p>
            </div>
            <p>{comment.comment}</p>
          </div>
        ))}
      </div>
      <div className="spacer" />
      <div className="comment-form">
        <div className="user-info">
          <img src="profilePictureUrl" alt="Nome do usuário" />{" "}
          <p className="name">Nome do usuário</p>{" "}
        </div>
        <textarea placeholder="Escreva seu comentário..."></textarea>
        <Button variant="brand">Comentar</Button>
        <div className="quick-messages">
          {quickMessages.map((message, index) => (
            <Button key={index}>{message}</Button>
          ))}
        </div>
      </div>
    </StyledCommentsCard>
  );
};
export default CommentsCard;
