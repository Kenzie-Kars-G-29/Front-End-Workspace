import React, { useEffect, useState } from "react";
import StyledCommentsCard from "./style";
import Button from "../Button/Button";
import api from "../../services/api";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { ModalEditComment } from "../ModalEditComment";
import { InfoUser } from "../../contexts/User/interfaces";

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
  const [isUserInfo, setIsUserInfo] = useState<InfoUser | null>(null);
  const [fetchedComments, setFetchedComments] = useState<Comment[]>(comments);
  const [commentText, setCommentText] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isInfoComment, setIsInfoComment] = useState(null);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const getInitials = (name: string) => {
    const names = name.split(" ");
    const initials = names
      .map((name) => name.charAt(0))
      .join("")
      .toUpperCase();
    return initials.substring(0, 2);
  };

  useEffect(() => {
    console.log("Comments received:", comments);
    setFetchedComments(comments);
  }, [comments]);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await api.get("/users/userlogged");
        setIsUserInfo(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    console.log(announcementId);
    const fetchComments = async () => {
      try {
        const response = await api.get(
          `/comments/announcement/${announcementId}`
        );
        setFetchedComments(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserInfo();
    fetchComments();
  }, [announcementId]);

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

  const handleInfos = (info: any) => {
    setIsInfoComment(info);
    toggleModal();
  };
  const testes = () => fetchedComments.map((comment) => console.log(comment));
  testes();
  console.log(isUserInfo);

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
              <p className="name">
                {isUserInfo !== null ? isUserInfo.name : "Carregando..."}
              </p>
              <p className="pontinho">•</p>
              <p className="date">{`${formatDistanceToNow(
                new Date(comment.createdAt),
                {
                  addSuffix: true,
                  locale: ptBR,
                }
              )}`}</p>
              <button
                onClick={() => handleInfos(comment)}
                id={comment.id}
                className="editBtn"
              >
                Editar
              </button>
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
      {isModalOpen && (
        <ModalEditComment
          toggleModal={toggleModal}
          isInfoComment={isInfoComment}
        />
      )}
    </StyledCommentsCard>
  );
};
export default CommentsCard;
