import { zodResolver } from "@hookform/resolvers/zod"
import Button from "../../components/Button/Button"
import { Footer } from "../../components/Footer/Footer"
import { Header } from "../../components/Header/Header"
import { forgetPasswordSchema } from "./schema"
import { ForgetPassContainer, ContainerFormStyled, MessageError } from "./style"
import { useForm } from "react-hook-form"
import { useNavigate, useParams } from "react-router-dom"
import api from "../../services/api"
import { toast } from "react-toastify"

interface ForgotPasswordData {
    password: string,
    confirmPassword: string
}

interface ResetPassData {
    newPassword: string
}

const ForgetPassword = () => {
    const { register, handleSubmit, formState: { errors }} = useForm<ForgotPasswordData>({
        mode: "onBlur",
        resolver: zodResolver(forgetPasswordSchema)
    })

    const navigate = useNavigate();
    const { token } = useParams()

    const forgetPassword = async (data: ResetPassData) => {
        try {
            await api.patch(`login/reset-password/${token}`, data)

            toast.success("Senha atualizada com sucesso")
            navigate("/signin")
            
        } catch (error) {
            console.log(error)
            toast.error("Algo deu errado tente novamente")
            
        }
    }

    
    const submit = (data: ForgotPasswordData) => {
        const obj = {
            newPassword: data.confirmPassword
        }

        forgetPassword(obj)
        
    }
    return (
        <>
        <Header />
        <ForgetPassContainer>
            <ContainerFormStyled>
                <form onSubmit={handleSubmit(submit)}>
                    <label htmlFor="">Nova senha</label>
                    <input type="password" placeholder="Digite aqui sua nova senha" {...register("password")} />
                    {errors?.password && <MessageError>{errors.password.message}</MessageError>}
                    
                    <label htmlFor="">Confirmação de senha</label>
                    <input type="password" placeholder="Confirme aqui sua nova senha" {...register("confirmPassword")} />
                    {errors?.confirmPassword && <MessageError>{errors.confirmPassword.message}</MessageError>}
                    

                    <Button variant="blue">Enviar</Button>
                </form>
            </ContainerFormStyled>
        </ForgetPassContainer>
        <Footer/>
        </>
    )
}

export default ForgetPassword