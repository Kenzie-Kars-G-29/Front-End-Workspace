import React, { useContext } from "react";
import StyledCommentsCard from "./style";
import Button from "../Button/Button";
import { useEffect, useState } from "react";
import api from "../../services/api";
import { UserContext } from "../../contexts/User";
import { ptBR } from "date-fns/locale";
import { formatRelative } from "date-fns";

export interface User {
  id: string;
  name: string;
}

export interface Announcement {
  id: string;
}

export interface Comment {
  id: number;
  text: string;
  createdAt: string;
  user: User;
  announcement: Announcement;
}

export interface CommentsCardProps {
  comments: Comment[];
  announcementId?: string;
}
const CommentsCard: React.FC<CommentsCardProps> = ({
  comments,
  announcementId,
}) => {
  const { isUserInfo } = useContext(UserContext);
  const [fetchedComments, setFetchedComments] = useState<Comment[]>(comments);
  const [commentText, setCommentText] = useState("");

  const getInitials = (name: string) => {
    const names = name.split(" ");
    return names
      .map((name) => name.charAt(0))
      .join("")
      .toUpperCase();
  };

  useEffect(() => {
    setFetchedComments(comments);
  }, [comments]);

  const handleCommentChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setCommentText(event.target.value);
  };

  const handleCommentSubmit = async () => {
    try {
      const response = await api.post(`/comments/`, {
        text: commentText,
        userId: isUserInfo?.id,
        announcementId: announcementId,
      });

      // Obter o novo comentário retornado pela API
      const newComment = response.data;

      // Fazer uma nova requisição para obter as informações do usuário correspondente ao novo comentário
      const userResponse = await api.get(`/users/${newComment.userId}`);
      const newUser = userResponse.data;

      // Atualizar o nome do usuário no novo comentário
      newComment.user.name = newUser.name;

      // Adicionar o novo comentário ao estado fetchedComments
      setFetchedComments([...fetchedComments, newComment]);

      // Limpar o campo de comentário
      setCommentText("");
    } catch (error) {
      console.error("Failed to submit comment:", error);
    }
  };

  const quickMessages = ["Ótimo produto!", "Adorei!", "Vou comprar novamente."];

  return (
    <StyledCommentsCard>
      <div className="comment">
        <h2>Comentários</h2>
        {fetchedComments.map((comment, index) => (
          <div className="comment-box" key={index}>
            <div className="user-info-comment">
              <span className="initialsCircle">
                {getInitials(comment.user.name)}
              </span>
              <p className="name">{comment.user.name}</p>
              <p className="pontinho">•</p>
              <p>
                {`${formatRelative(new Date(comment.createdAt), new Date(), {
                  locale: ptBR,
                })}`}
              </p>
            </div>
            <p>{comment.text}</p>
          </div>
        ))}
      </div>
      <div className="spacer" />
      <div className="comment-form">
        <div className="user-info">
          <p className="name">{isUserInfo?.name}</p>
        </div>
        <textarea
          placeholder="Escreva seu comentário..."
          value={commentText}
          onChange={handleCommentChange}
        ></textarea>
        <Button variant="brand" onClick={handleCommentSubmit}>
          Comentar
        </Button>
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
