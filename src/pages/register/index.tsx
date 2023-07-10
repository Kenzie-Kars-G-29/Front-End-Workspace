import { Header } from "../../components/Header/Header";
import StyledRegister from "./style";
import Button from "../../components/Button/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../../components/Footer/Footer";
import { Modal } from "../../components/ModalRegister/ModalRegister";
import { useForm, SubmitHandler } from "react-hook-form";
import api from "../../services/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const Register = () => {
  const navigate = useNavigate();
  const [isSeller, setIsSeller] = useState(false);

  const formSchema = z
    .object({
      name: z
        .string()
        .min(3, "Nome precisa ter no mínimo 3 caracteres")
        .max(100),
      email: z.string().nonempty("Email obrigatório").email("Email inválido"),
      password: z
        .string()
        .nonempty("Senha obrigatória com no mínimo 4 caracteres")
        .min(4)
        .max(50),
      confirmPassword: z.string().nonempty("Confirmação de senha obrigatória"),
      cpf: z
        .string()
        .nonempty("CPF obrigatório com no mínimo 3 caracteres")
        .min(8)
        .max(12),
      phone: z.string().refine((value) => /^[0-9]{10,12}$/.test(value), {
        message:
          "O número de celular deve conter apenas números e ter até 12 dígitos.",
      }) /* ;.nonempty("Telefone obrigatório") */,
      birthday: z.string().nonempty("Data de nascimento obrigatória"),
      description: z.string(),
      cep: z.string().nonempty("CEP obrigatório, com apenas números").min(6),
      state: z.string().nonempty("Estado obrigatório"),
      city: z.string().nonempty("Cidade obrigatória"),
      street: z.string().nonempty("Rua obrigatória"),
      number: z.string().nonempty("Número obrigatório"),
      complement: z.string(),
      isSeller: z.boolean().default(false),
    })
    .refine(({ confirmPassword, password }) => confirmPassword === password, {
      message: "Senhas não coincidem!",
      path: ["confirmPassword"],
    });

  type formData = z.infer<typeof formSchema>;

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<formData>({
    resolver: zodResolver(formSchema),
  });
  console.log(errors);

  const onSubmit: SubmitHandler<formData> = async (data) => {
    console.log(data);
    data.isSeller = isSeller;

    try {
      await api.post("/users", data);
      reset();
      setIsModalOpen(true);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const zodError = error as z.ZodError;
        const errorMessages = zodError.issues.map((issue) => issue.message);
        console.log(errorMessages); // Exibe os erros no console
      } else {
        console.error(error);
      }
    }
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = () => {
    setIsModalOpen(false);
    navigate("/");
  };

  return (
    <>
      <Header />
      <StyledRegister>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>Cadastro</h2>
          <p>Informações pessoais</p>
          <label>Nome</label>
          <input
            type="text"
            placeholder="Ex. Samuel Leão"
            {...register("name")}
          />
          {errors?.name && <span>{errors.name.message}</span>}
          <label>Email</label>
          <input
            type="email"
            placeholder="Ex. samuel@kenzie.com.br"
            {...register("email")}
          />
          {errors.email && <span>{errors.email.message}</span>}
          <label>CPF</label>
          <input placeholder="00000000000" {...register("cpf")} />
          {errors.cpf && <span>{errors.cpf.message}</span>}
          <label>Celular</label>
          <input placeholder="(DDD)900000000" {...register("phone")} />
          {errors.phone && <span>{errors.phone.message}</span>}
          <label>Data de nascimento</label>
          <input type="date" {...register("birthday")} />
          {errors.birthday && <span>{errors.birthday.message}</span>}
          <label>Descrição</label>
          <textarea
            placeholder="Digitar descrição"
            {...register("description")}
          />
          <p>Informações de endereço</p>
          <label>CEP</label>
          <input placeholder="00000000" {...register("cep")} />
          {errors.cep && <span>{errors.cep.message}</span>}
          <div className="divCityState">
            <div>
              <label>Estado</label>
              <input
                type="text"
                placeholder="Digitar Estado"
                {...register("state")}
              />
              {errors.state && <span>{errors.state.message}</span>}
            </div>
            <div>
              <label>Cidade</label>
              <input
                type="text"
                placeholder="Digitar Cidade"
                {...register("city")}
              />
              {errors.city && <span>{errors.city.message}</span>}
            </div>
          </div>
          <label>Rua</label>
          <input
            type="text"
            placeholder="Digitar Rua"
            {...register("street")}
          />
          {errors.street && <span>{errors.street.message}</span>}
          <div className="divNumberComplement">
            <div>
              <label>Número</label>
              <input
                type="text"
                placeholder="Digitar número"
                {...register("number")}
              />
              {errors.number && <span>{errors.number.message}</span>}
            </div>
            <div>
              <label>Complemento</label>
              <input
                type="text"
                placeholder="Ex. apart 307"
                {...register("complement")}
              />
              {errors.complement && <span>{errors.complement.message}</span>}
            </div>
          </div>
          <p>Tipo de conta</p>
          <div className="buttonBuyerSeller">
            <Button
              variant="blue"
              className={isSeller === false ? "active" : ""}
              type="button"
              onClick={() => setIsSeller(false)}
            >
              Comprador
            </Button>
            <Button
              variant="white"
              className={isSeller === true ? "active" : ""}
              type="button"
              onClick={() => setIsSeller(true)}
            >
              Anunciante
            </Button>
          </div>
          <label>Senha</label>
          <input
            type="password"
            placeholder="Digitar Senha"
            {...register("password")}
          />
          {errors.password && <span>{errors.password.message}</span>}
          <label>Confirmar Senha</label>
          <input
            type="password"
            placeholder="Digitar Senha"
            {...register("confirmPassword")}
          />
          {errors.confirmPassword && (
            <span>{errors.confirmPassword.message}</span>
          )}
          <Button variant="blue" type="submit">
            Finalizar Cadastro
          </Button>
        </form>
        {isModalOpen && <Modal isOpen={isModalOpen} onClose={closeModal} />}
      </StyledRegister>
      <Footer />
    </>
  );
};

export default Register;
