import api from "../../services/api";
import Button from "../Button/Button";
import { InfoAnnoun } from "../Card";
import FormDeleteAnnounStyled from "./style";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { UserContext } from "../../contexts/User";

interface ModalProps {
  onCloseModalEdit: () => void;
  onClose: () => void;
  isInfoAnnoun: InfoAnnoun | null;
}

const ModalDeleteAnnouncement = ({
  onCloseModalEdit,
  onClose,
  isInfoAnnoun,
}: ModalProps) => {
  const { infosUserLogged } = useContext(UserContext);

  const { handleSubmit } = useForm({});

  const deleteAnnoun = async (idAnnoun: any) => {
    const token = localStorage.getItem("token");

    try {
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      const response = await api.delete(`/announcement/${idAnnoun}`);
      if (response.status == 204) {
        toast.success("Anúncio excluido com sucesso");
        onClose();
        infosUserLogged();
      }
    } catch (error) {
      console.log(error);
      toast.error("Não foi possivel excluir o anúncio");
    }
  };

  const submit = () => {
    deleteAnnoun(isInfoAnnoun?.id);
    onCloseModalEdit();
  };

  return (
    <>
      <FormDeleteAnnounStyled onSubmit={handleSubmit(submit)}>
        <h2>Tem certeza que deseja remover este anúncio?</h2>
        <h3>
          Essa ação não pode ser desfeita. Isso excluirá permanentemente sua
          conta e removerá seus dados de nossos servidores.
        </h3>
        <div className="divBtn">
          <Button type="button" variant="gray" onClick={onClose}>
            Cancelar
          </Button>
          <Button type="submit" className="btnDelete">
            Sim, excluir anúncio
          </Button>
        </div>
      </FormDeleteAnnounStyled>
    </>
  );
};

export default ModalDeleteAnnouncement;
