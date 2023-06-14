import { useForm } from "react-hook-form";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/index";
import { SigninContainer, StyledFormContainer } from "./style";

const Signin = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
   
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
          />
          <Input
            type="password"
            label="Senha"
            placeholder="Digitar senha"
            bgColor={false}
            border={true}
            id="password"
            register={register}
          />
          <a href="/forgot-password">Esqueci minha senha</a>
          <Button variant="brand">Entrar</Button>
          <a className="conta" href="/signup">
            Ainda não possui conta?
          </a>
          <Button variant="white">Cadastrar</Button>
        </form>
      </StyledFormContainer>
    </SigninContainer>
  );
};

export default Signin;
