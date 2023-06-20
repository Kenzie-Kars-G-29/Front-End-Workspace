import { ModalContent, ModalWrapper } from "./style";
import Button from "../Button/Button";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { resetPassSchema } from "./schema";
import { toast } from "react-toastify";


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

    const submit = (data: ResetPasswordData) => {
        console.log(data)
        reset()
        // toggleModal()
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
            <label htmlFor="">E-mail</label>
            <input type="email" placeholder="Digite aqui seu e-mail" {...register("email")}/>
            <Button variant="blue">
                Enviar
            </Button>
        </form>
      </ModalContent>
    </ModalWrapper>
  );
};
