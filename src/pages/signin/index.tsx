import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/index";
import { SigninContainer, StyledFormContainer } from "./style";
import { ModalResetPass } from "../../components/ModalResetPass";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import api from "../../services/api";

const formSchema = z.object({
  email: z.string().nonempty("Email obrigatório").email("Email inválido"),
  password: z
    .string()
    .nonempty("Senha obrigatória com no mínimo 4 caracteres")
    .min(4),
});

type LoginData = z.infer<typeof formSchema>;

type ApiResponse = {
  token: string;
};

const Signin = () => {
  const navigate = useNavigate();
  const [serverError, setServerError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  const toggleModal = () => setIsModalOpen(!isModalOpen);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({ resolver: zodResolver(formSchema) });

  const onSubmit: SubmitHandler<LoginData> = async (data) => {
    try {
      const response = await api.post<ApiResponse>("/login", data);
      const { token } = response.data
      localStorage.setItem("token", response.data.token);
      api.defaults.headers.common.Authorization = `Bearer ${token}`
      navigate("/");
    } catch (error) {
      setServerError("Erro no servidor!");
    }
  };

  return (
    <SigninContainer>
      <StyledFormContainer>
        <h2>Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="email"
            label="Email"
            placeholder="Digitar email"
            bgColor={false}
            border={true}
            id="email"
            register={register}
            error={errors.email?.message}
          />
          <Input
            type="password"
            label="Senha"
            placeholder="Digitar senha"
            bgColor={false}
            border={true}
            id="password"
            register={register}
            error={errors.password?.message}
          />
          <button onClick={toggleModal}>Esqueci minha senha</button>
          <Button variant="brand">Entrar</Button>
          <a className="conta" href="/register">
            Ainda não possui conta?
          </a>
          <Button variant="white" onClick={() => navigate("/register")}>
            Cadastrar
          </Button>
        </form>
        {serverError && <p>{serverError}</p>}
        {isModalOpen && (<ModalResetPass toggleModal={toggleModal} />)}
      </StyledFormContainer>
    </SigninContainer>
  );
};

export default Signin;
