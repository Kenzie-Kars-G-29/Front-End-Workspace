import { zodResolver } from "@hookform/resolvers/zod"
import Button from "../../components/Button/Button"
import { Footer } from "../../components/Footer/Footer"
import { Header } from "../../components/Header/Header"
import { forgetPasswordSchema } from "./schema"
import { ForgetPassContainer, ContainerFormStyled, MessageError } from "./style"
import { useForm } from "react-hook-form"

interface ForgotPasswordData {
    password: string,
    confirmPassword: string
}

const ForgetPassword = () => {
    const { register, handleSubmit, reset, formState: { errors }} = useForm<ForgotPasswordData>({
        mode: "onBlur",
        resolver: zodResolver(forgetPasswordSchema)
    })

    const submit = (data: ForgotPasswordData) => {
        console.log(data)
        reset()
        
    }
    return (
        <>
        <Header/>
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