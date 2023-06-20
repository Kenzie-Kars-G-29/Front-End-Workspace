import { useForm } from "react-hook-form";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/index";
import { SigninContainer, StyledFormContainer } from "./style";
import { ModalResetPass } from "../../components/ModalResetPass";
import { useState } from "react";

const Signin = () => {
  const { register, handleSubmit } = useForm();
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const onSubmit = (data: any) => {
    console.log(data);
   
  };

  return (
    <>
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
            <button onClick={toggleModal}>Esqueci minha senha</button>
            <Button variant="brand">Entrar</Button>
            <a className="conta" href="/register">
              Ainda não possui conta?
            </a>
            <Button variant="white">Cadastrar</Button>
          </form>
        </StyledFormContainer>
      </SigninContainer>
      {isModalOpen && (<ModalResetPass toggleModal={toggleModal} />)}
    </>
  );
};

export default Signin;
