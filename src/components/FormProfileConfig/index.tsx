import { SubmitHandler, useForm } from "react-hook-form";
import Input from "../Input";
import StyledProfileConfig from "./style";
import Button from "../Button/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import userUpdateFormSchema from "./formSchema";
import { z } from "zod";
import api from "../../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

type tUserUpdateForm = z.infer<typeof userUpdateFormSchema>;

interface iUserUpdateFormProps {
  onClose: () => void;
}

const FormProfileConfig = ({ onClose }: iUserUpdateFormProps) => {
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<tUserUpdateForm>({
    resolver: zodResolver(userUpdateFormSchema),
  });

  //id do usuario mockado
  const updateUser = async (data: tUserUpdateForm): Promise<void> => {
    const token = localStorage.getItem("token");
    const userId = "fdc05ba9-1c55-4223-8aaa-06a39a240d74";

    try {
      const response = await api.patch(`/users/${userId}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      //Fechar o modal e exibir toast de sucesso!
      console.log(response);
      if (response.status == 200) {
        onClose();
        toast.success("Perfil atualizado!");
      }
    } catch (error) {
      //Mostra toast com mensagem de erro
      console.log(error);
      toast.error("Deu ruim!");
    }
  };

  //id do usuario mockado
  const deleteUser = async (): Promise<void> => {
    const token = localStorage.getItem("token");
    const userId = "01ba16d9-66b7-4ffb-987e-8625c17c7194";

    try {
      const response = await api.delete(`/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      //Fechar o modal, limpar o localStorage e redirecionar para home
      console.log(response);
      if (response.status == 204) {
        onClose();
        localStorage.clear()
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const submit: SubmitHandler<tUserUpdateForm> = (formData) => {
    updateUser(formData);
  };

  return (
    <StyledProfileConfig onSubmit={handleSubmit(submit)}>
      <h3>Informações pessoais</h3>

      <div className="inputContainer">
        <div>
          <Input
            id="name"
            type="text"
            size="largue"
            label="Nome"
            placeholder="Lucas Samuel"
            bgColor={true}
            border={true}
            register={register}
          />
          {errors.name ? (
            <p className="errorMessage">{errors.name.message}</p>
          ) : null}
        </div>

        <div>
          <Input
            id="email"
            type="email"
            size="largue"
            label="Email"
            placeholder="samuel@kenzie.com.br"
            bgColor={true}
            border={true}
            register={register}
          />
          {errors.email ? (
            <p className="errorMessage">{errors.email.message}</p>
          ) : null}
        </div>

        <div>
          <Input
            id="cpf"
            type="number"
            size="largue"
            label="CPF"
            placeholder="900.880.090-00"
            bgColor={true}
            border={true}
            register={register}
          />
          {errors.cpf ? (
            <p className="errorMessage">{errors.cpf.message}</p>
          ) : null}
        </div>

        <div>
          <Input
            id="phone"
            type="number"
            size="largue"
            label="Celular"
            placeholder="(084) 90909-9092"
            bgColor={true}
            border={true}
            register={register}
          />
          {errors.phone ? (
            <p className="errorMessage">{errors.phone.message}</p>
          ) : null}
        </div>

        <div>
          <Input
            id="birthday"
            type="date"
            size="largue"
            label="Data de nascimento "
            placeholder="09/12/99"
            bgColor={true}
            border={true}
            register={register}
          />
          {errors.birthday ? (
            <p className="errorMessage">{errors.birthday.message}</p>
          ) : null}
        </div>

        <div>
          <Input
            id="description"
            type="textarea"
            size="largue"
            label="Descrição"
            placeholder="Lorem ipsum..."
            bgColor={true}
            border={true}
            register={register}
          />
          {errors.description ? (
            <p className="errorMessage">{errors.description.message}</p>
          ) : null}
        </div>
      </div>

      <div className="buttonContainer">
        <Button variant="gray" type="button" onClick={() => onClose()}>
          Cancelar
        </Button>

        <Button variant="black" type="button" onClick={() => deleteUser()}>
          Excluir perfil
        </Button>

        <Button variant="brand" type="submit">
          Salvar alterações
        </Button>
      </div>
    </StyledProfileConfig>
  );
};

export default FormProfileConfig;
