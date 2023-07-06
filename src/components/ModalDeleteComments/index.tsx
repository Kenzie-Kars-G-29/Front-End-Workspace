import api from "../../services/api"
import Button from "../Button/Button"
import { toast } from "react-toastify";
import {useForm} from'react-hook-form'
import FormDeleteAnnounStyled from "./style";
import { ModalContent, ModalWrapper } from "../ModalResetPass/style";


interface ModalProps {
    toggleModal: () => void
    isInfoComment: any
}

const ModalDeleteComment = ({toggleModal, isInfoComment}: ModalProps) => {

    const deleteComment = async (idComment: any) => {
        const token = localStorage.getItem("token")
            
        try {
            api.defaults.headers.common.authorization = `Bearer ${token}`
            api.delete(`/comments/${idComment}`)

            toast.success("Comentário excluido com sucesso")

        } catch (error) {
            console.log(error)
            toast.error("Não foi possivel excluir o comentário")
        }   
    }

    const {handleSubmit} = useForm({})
    
    const submit = () => {
        deleteComment(isInfoComment?.id)
        toggleModal()
      }
    
    return (
        <ModalWrapper>
            <ModalContent>
            <div className="modalHeader">
                <h3>Excluir Anuncio</h3>
                <button onClick={() => toggleModal()}>X</button>
            </div>
                <FormDeleteAnnounStyled onSubmit={handleSubmit(submit)}>
                    <h2>Tem certeza que deseja remover este comentario?</h2>
                    <h3>
                    Essa ação não pode ser desfeita. O comentário será apagado permanentemente dos nossos servidores.
                    </h3>
                    <div className="divBtn">
                        <Button type="button" variant="gray" onClick={toggleModal}>Cancelar</Button>
                        <Button type="submit" className="btnDelete">Sim, excluir</Button>
                    </div>
                </FormDeleteAnnounStyled>
            </ModalContent>
        </ModalWrapper>
    )
}

export default ModalDeleteComment