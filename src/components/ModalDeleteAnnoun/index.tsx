import api from "../../services/api"
import Button from "../Button/Button"
import { InfoAnnoun } from "../Card"
import { ModalContent, ModalWrapper } from "../ModalEditAnnoun/style"
import FormDeleteAnnounStyled from "./style"
import { toast } from "react-toastify";
import {useForm} from'react-hook-form'


interface ModalProps {
    toggleModal: () => void
    isInfoAnnoun: InfoAnnoun | null
}

const ModalDeleteAnnoun = ({toggleModal, isInfoAnnoun}: ModalProps) => {

    const deleteAnnoun = async (idAnnoun: any) => {
        const token = localStorage.getItem("token")
            
        try {
            api.defaults.headers.common.authorization = `Bearer ${token}`
            api.delete(`/announcement/${idAnnoun}`)

            toast.success("Anuncio excluido com sucesso")

        } catch (error) {
            console.log(error)
            toast.error("Não foi possivel excluir o anuncio")
        }   
    }

    const {handleSubmit} = useForm({})
    
    const submit = () => {
        deleteAnnoun(isInfoAnnoun?.id)
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
                    <h2>Tem certeza que deseja remover este anúncio?</h2>
                    <h3>
                    Essa ação não pode ser desfeita. Isso excluirá permanentemente sua conta e removerá seus dados de nossos servidores.
                    </h3>
                    <div className="divBtn">
                        <Button type="button" variant="gray" onClick={toggleModal}>Cancelar</Button>
                        <Button type="submit" className="btnDelete">Sim, excluir anúncio</Button>
                    </div>
                </FormDeleteAnnounStyled>
            </ModalContent>
        </ModalWrapper>
    )
}

export default ModalDeleteAnnoun