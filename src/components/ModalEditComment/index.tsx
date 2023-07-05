import { ModalContent, ModalWrapper } from "./style";
import Button from "../Button/Button";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import 'react-toastify/dist/ReactToastify.css';
import { editCommentSchema } from "./schema";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import api from "../../services/api";
import { useState } from "react";
import ModalDeleteComment from "../ModalDeleteComments";

interface ModalProps {
    toggleModal: () => void;
    isInfoComment: any
}

interface EditCommentData {
    text: string,
    user: {
      id: string;
      name: string;
    };
}

export const ModalEditComment = ({ toggleModal, isInfoComment }: ModalProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false) 

    const toggleModalDelete = () => setIsModalOpen(!isModalOpen);

    const { register, handleSubmit, reset} = useForm<EditCommentData>({
        resolver: zodResolver(editCommentSchema)
    })

    const editComment = async (data: EditCommentData, idComment: string) => {
      try {
        await api.patch(`/comments/${idComment}`, data)
        toast.success("Comentario editado com sucesso")
          
      } catch (error) {
        console.log(error)
        toast.error("Algo deu errado, tente novamente")
      }
    }

    const submit = (data: EditCommentData) => {
        const idComment = isInfoComment.id
        const user = isInfoComment.user


        const newData = {
          ...data,
          user
        }

        editComment(newData, idComment)
        reset()
        toggleModal()
      
        // console.log(newData)
       
    }

  return (
    <ModalWrapper>
      <ModalContent>
        <div className="modalHeader">
            <h3>Edita Comentario</h3>
            <button onClick={() => toggleModal()}>X</button>
        </div>
        <form onSubmit={handleSubmit(submit)}>
            <label>Comentário:</label>
            <input type="text" id="comment"  defaultValue={isInfoComment?.text}  {...register("text")}/>
            <Button variant="gray" type="button" onClick={toggleModal}>Cancelar</Button>
            <Button type="submit" variant="brand">
                Enviar
            </Button>
            <Button type="button" variant="red" onClick={toggleModalDelete}>Excluir Comentario</Button>
        </form>
      </ModalContent>
      {isModalOpen && (<ModalDeleteComment toggleModal={toggleModal} isInfoComment={isInfoComment}/>)}
    </ModalWrapper>
  );
};
