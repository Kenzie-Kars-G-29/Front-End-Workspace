import { z } from "zod";
import userAddressUpdateFormSchema from "./formSchema";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import StyledFormAddressUpdate from "./style";
import Input from "../Input";
import Button from "../Button/Button";
import api from "../../services/api";
import { toast } from "react-toastify";
import { useContext } from "react";
import { UserContext } from "../../contexts/User";

type tAddressUpdate = z.infer<typeof userAddressUpdateFormSchema>;
interface iFormAddressUpdateProps {
  onClose: () => void;
}

const FormAddressUpdate = ({ onClose }: iFormAddressUpdateProps) => {
  const { isUserInfo } = useContext(UserContext)

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<tAddressUpdate>({
    resolver: zodResolver(userAddressUpdateFormSchema),
  });


  const updateUser = async (data: tAddressUpdate): Promise<void> => {
    const token = localStorage.getItem("token");

    try {
      const response = await api.patch(`/users/${isUserInfo?.id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (response.status == 200) {
        onClose();
        toast.success("Endereço atualizado!");
        location.reload()
      }
    } catch (error) {
      //Mostra toast com mensagem de erro
      console.log(error);
      toast.error("Deu ruim!");
    }
  };

  const submit: SubmitHandler<tAddressUpdate> = (formData) => {
    updateUser(formData);
  };

  return (
    <StyledFormAddressUpdate onSubmit={handleSubmit(submit)}>
      <h3>Infomações de endereço</h3>

      <div className="inputContainer">
        <div>
          <Input
            id="cep"
            type="number"
            size="largue"
            label="CEP"
            placeholder="89888.888"
            bgColor={true}
            border={true}
            register={register}
          />
          {errors.cep ? (
            <p className="errorMessage">{errors.cep.message}</p>
          ) : null}
        </div>

        <div className="row">
          <div>
            <Input
              id="state"
              type="text"
              size="small"
              label="Estado"
              placeholder="Paraná"
              bgColor={true}
              border={true}
              register={register}
            />
            {errors.state ? (
              <p className="errorMessage">{errors.state.message}</p>
            ) : null}
          </div>

          <div>
            <Input
              id="city"
              type="text"
              size="small"
              label="Cidade"
              placeholder="Curitiba"
              bgColor={true}
              border={true}
              register={register}
            />
            {errors.city ? (
              <p className="errorMessage">{errors.city.message}</p>
            ) : null}
          </div>
        </div>

        <div>
          <Input
            id="street"
            type="text"
            size="largue"
            label="Rua"
            placeholder="Rua do paraná"
            bgColor={true}
            border={true}
            register={register}
          />
          {errors.street ? (
            <p className="errorMessage">{errors.street.message}</p>
          ) : null}
        </div>

        <div className="row">
          <div>
            <Input
              id="number"
              type="text"
              size="small"
              label="Número"
              placeholder="1029"
              bgColor={true}
              border={true}
              register={register}
            />
            {errors.number ? (
              <p className="errorMessage">{errors.number.message}</p>
            ) : null}
          </div>

          <div>
            <Input
              id="complement"
              type="text"
              size="small"
              label="Complemento"
              placeholder="Apart 12"
              bgColor={true}
              border={true}
              register={register}
            />
            {errors.complement ? (
              <p className="errorMessage">{errors.complement.message}</p>
            ) : null}
          </div>
        </div>
      </div>

      <div className="buttonContainer">
        <Button variant="gray" type="button" onClick={() => onClose()}>
          Cancelar
        </Button>

        <Button variant="brand" type="submit">
          Salvar alterações
        </Button>
      </div>
    </StyledFormAddressUpdate>
  );
};

export default FormAddressUpdate;
