import React, { useContext, useEffect, useState } from "react";
import StyledCommentsCard from "./style";
import Button from "../Button/Button";
import api from "../../services/api";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { UserContext } from "../../contexts/User";

export interface Comment {
  id: string;
  text: string;
  createdAt: string;
  user: {
    id: string;
    name: string;
  };
}

export interface CommentsCardProps {
  comments: Comment[];
  announcementId: string;
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
    const initials = names
      .map((name) => name.charAt(0))
      .join("")
      .toUpperCase();
    return initials.substring(0, 2);
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

      const newComment: Comment = response.data;
      const userResponse = await api.get(`/users/${newComment.user.id}`);
      const newUser = userResponse.data;
      newComment.user.name = newUser.name;
      setFetchedComments([...fetchedComments, newComment]);
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
        {fetchedComments.map((comment) => (
          <div className="comment-box" key={comment.id}>
            <div className="user-info-comment">
              <span className="initialsCircle">
                {getInitials(comment.user.name)}
              </span>
              <p className="name">{comment.user.name}</p>
              <p className="pontinho">•</p>
              <p className="date">{`${formatDistanceToNow(
                new Date(comment.createdAt),
                {
                  addSuffix: true,
                  locale: ptBR,
                }
              )}`}</p>
            </div>
            <p className="text">{comment.text}</p>
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
