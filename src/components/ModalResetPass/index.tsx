import { ModalContent, ModalWrapper } from "./style";
import Button from "../Button/Button";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { resetPassSchema } from "./schema";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import api from "../../services/api";

interface ModalProps {
    toggleModal: () => void;
}

interface ResetPasswordData {
    email: string
}

export const ModalResetPass = ({ toggleModal }: ModalProps) => {
    const { register, handleSubmit, reset} = useForm<ResetPasswordData>({
        resolver: zodResolver(resetPassSchema)
    })

    const solicityEmail = async (data: ResetPasswordData) => {
      try {
        await api.post("/login/forgot-password", data)
        toast.success("email enviado com sucesso")
          
      } catch (error) {
        console.log(error)
        toast.error("Algo deu errado, tente novamente")
      }
    }

    const submit = (data: ResetPasswordData) => {
        solicityEmail(data)
        reset()
        toggleModal()
    }

  return (
    <ModalWrapper>
      <ModalContent>
        <div className="modalHeader">
            <h3>Esqueceu sua senha?</h3>
            <button onClick={() => toggleModal()}>X</button>
        </div>
        <form onSubmit={handleSubmit(submit)}>
            <p>Enviaremos um e-mail com as instruções de como redefinir sua senha.</p>
            <label></label>
            <input type="email" id="email" placeholder="Digite aqui seu e-mail" {...register("email")}/>
            <Button variant="brand">
                Enviar
            </Button>
        </form>
      </ModalContent>
    </ModalWrapper>
  );
};
