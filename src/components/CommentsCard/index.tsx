import React from "react";
import StyledCommentsCard from "./style";

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
            <img src="profilePictureUrl" alt={`${comment.name}`} />{" "}
            <p>{comment.name}</p>
            <p>{comment.time}</p>
            <p>{comment.comment}</p>
          </div>
        ))}
      </div>

      <div className="comment-form">
        <div className="user-info">
          <img src="profilePictureUrl" alt="Nome do usuário" />{" "}
          <p>Nome do usuário</p>{" "}
        </div>
        <textarea placeholder="Escreva seu comentário..."></textarea>
        <button>Comentar</button>
        <div className="quick-messages">
          {quickMessages.map((message, index) => (
            <button key={index}>{message}</button>
          ))}
        </div>
      </div>
    </StyledCommentsCard>
  );
};

export default CommentsCard;
