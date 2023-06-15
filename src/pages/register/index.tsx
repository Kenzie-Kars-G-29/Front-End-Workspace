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
import * as z from "zod";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: " ",
    email: "",
    password: "",
    cpf: "",
    phone: "",
    birthday: "",
    description: "",
    cep: "",
    state: "",
    city: "",
    street: "",
    number: "",
    complement: "",
    isSeller: false,
  });

  const formSchema = z.object({
    name: z.string().nonempty("Nome obrigatório"),
    email: z.string().nonempty("Email obrigatório").email("Email inválido"),
    password: z
      .string()
      .nonempty("Senha obrigatória com 4 a 8 caracteres")
      .min(4)
      .max(8),
    cpf: z.string().nonempty("CPF obrigatório"),
    phone: z.string().nonempty("Telefone obrigatório"),
    birthday: z.string().nonempty("Data de nascimento obrigatória"),
    description: z.string().nonempty("Descrição obrigatória"),
    cep: z.string().nonempty("CEP obrigatório"),
    state: z.string().nonempty("Estado obrigatório"),
    city: z.string().nonempty("Cidade obrigatória"),
    street: z.string().nonempty("Rua obrigatória"),
    number: z.string().nonempty("Número obrigatório"),
    complement: z.string(),
    isSeller: z.boolean(),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<typeof formData>({
    resolver: zodResolver(formSchema),
  });

  /*  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleTextAreaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }; */

  const onSubmit: SubmitHandler<typeof formData> = async (data) => {
    console.log(data);
    try {
      const response = await api.post("/users", data);
      reset();

      /*    setFormData({
        name: " ",
        email: "",
        password: "",
        cpf: "",
        phone: "",
        birthday: "",
        description: "",
        cep: "",
        state: "",
        city: "",
        street: "",
        number: "",
        complement: "",
        isSeller: false,
      }); */

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
            required
            {...register("name")}
          />
          {/* {errors.name? <p>{errors.name.message}</p>: null} */}
          <label>Email</label>
          <input
            type="email"
            placeholder="Ex. samuel@kenzie.com.br"
            required
            {...register("email")}
          />
          {/*  {errors.email && <p>{errors.email.message}</p>} */}
          <label>CPF</label>
          <input placeholder="000.000.000-00" required {...register("cpf")} />
          {/*  {errors.cpf && <p>{errors.cpf.message}</p>} */}
          <label>Celular</label>
          <input
            placeholder="(DDD) 90000-0000"
            required
            {...register("phone")}
          />
          {/*  {errors.phone && <p>{errors.phone.message}</p>} */}
          <label>Data de nascimento</label>
          <input type="date" required {...register("birthday")} />
          {/*   {errors.birthday && <p>{errors.birthday.message}</p>} */}
          <label>Descrição</label>
          <textarea
            placeholder="Digitar descrição"
            {...register("description")}
          />
          {/*   {errors.description && <p>{errors.description.message}</p>} */}
          <p>Informações de endereço</p>
          <label>CEP</label>
          <input placeholder="00000-000" required {...register("cep")} />
          {/*  {errors.cep && <p>{errors.cep.message}</p>} */}
          <div className="divCityState">
            <div>
              <label>Estado</label>
              <input
                type="text"
                placeholder="Digitar Estado"
                required
                {...register("state")}
              />
              {/*   {errors.state && <p>{errors.state.message}</p>} */}
            </div>
            <div>
              <label>Cidade</label>
              <input
                type="text"
                placeholder="Digitar Cidade"
                required
                {...register("city")}
              />
              {/*     {errors.city && <p>{errors.city.message}</p>} */}
            </div>
          </div>
          <label>Rua</label>
          <input
            type="text"
            placeholder="Digitar Rua"
            required
            {...register("street")}
          />
          {/*  {errors.street && <p>{errors.street.message}</p>} */}
          <div className="divNumberComplement">
            <div>
              <label>Número</label>
              <input
                type="text"
                placeholder="Digitar número"
                required
                {...register("number")}
              />
              {/*       {errors.number && <p>{errors.number.message}</p>} */}
            </div>
            <div>
              <label>Complemento</label>
              <input
                type="text"
                placeholder="Ex. apart 307"
                {...register("complement")}
              />
              {/*   {errors.complement && <p>{errors.complement.message}</p>} */}
            </div>
          </div>
          <p>Tipo de conta</p>
          <div className="buttonBuyerSeller">
            <Button
              variant="blue"
              className={formData.isSeller === false ? "active" : ""}
              type="button"
              onClick={() => setFormData({ ...formData, isSeller: false })}
            >
              Comprador
            </Button>
            <Button
              variant="white"
              className={formData.isSeller === true ? "active" : ""}
              type="button"
              onClick={() => setFormData({ ...formData, isSeller: true })}
            >
              Anunciante
            </Button>
          </div>
          <label>Senha</label>
          <input
            type="password"
            placeholder="Digitar Senha"
            required={true}
            {...register("password")}
          />
          <label>Confirmar Senha</label>
          <input
            type="password"
            placeholder="Digitar Senha"
            {...register("password")}
          />
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

/* const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: " ",
    email: "",
    password: "",
    cpf: "",
    phone: "",
    birthday: "",
    description: "",
    cep: "",
    state: "",
    city: "",
    street: "",
    number: "",
    complement: "",
    isSeller: false,
  });

  const formSchema = z.object({
    name: z.string().nonempty('Nome obrigatório'),
    email: z.string().nonempty('Email obrigatório').email('Email inválido'),
    password: z.string().nonempty('Senha obrigatória com 4 a 8 caracteres').min(4).max(8),
    cpf: z.string().nonempty('CPF obrigatório'),
    phone: z.string().nonempty('Telefone obrigatório'),
    birthday: z.string().nonempty('Data de nascimento obrigatória'),
    description: z.string().nonempty('Descrição obrigatória'),
    cep: z.string().nonempty('CEP obrigatório'),
    state: z.string().nonempty('Estado obrigatório'),
    city: z.string().nonempty('Cidade obrigatória'),
    street: z.string().nonempty('Rua obrigatória'),
    number: z.string().nonempty('Número obrigatório'),
    complement: z.string(),
    isSeller: z.boolean(),
  });

  
 */
/*   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleTextAreaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
    try {
      const response = await api.post("/users", formData);

      // Limpando os campos do formulário
      setFormData({
        name: " ",
        email: "",
        password: "",
        cpf: "",
        phone: "",
        birthday: "",
        description: "",
        cep: "",
        state: "",
        city: "",
        street: "",
        number: "",
        complement: "",
        isSeller: false,
      });

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
        <form onSubmit={handleSubmit}>
          <h2>Cadastro</h2>
          <p>Informações pessoais</p>
          <label>Nome</label>
          <input
            type="text"
            placeholder="Ex. Samuel Leão"
            required
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <label>Email</label>
          <input
            type="email"
            placeholder="Ex. samuel@kenzie.com.br"
            required
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <label>CPF</label>
          <input
            placeholder="000.000.000-00"
            required
            name="cpf"
            value={formData.cpf}
            onChange={handleInputChange}
          />
          <label>Celular</label>
          <input
            placeholder="(DDD) 90000-0000"
            required
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
          />
          <label>Data de nascimento</label>
          <input
            type="date"
            required
            name="birthday"
            value={formData.birthday}
            onChange={handleInputChange}
          />
          <label>Descrição</label>
          <textarea
            placeholder="Digitar descrição"
            name="description"
            value={formData.description}
            onChange={handleTextAreaChange}
          />
          <p>Informações de endereço</p>
          <label>CEP</label>
          <input
            placeholder="00000-000"
            required
            name="cep"
            value={formData.cep}
            onChange={handleInputChange}
          />
          <div className="divCityState">
            <div>
              <label>Estado</label>
              <input
                type="text"
                placeholder="Digitar Estado"
                required
                name="state"
                value={formData.state}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Cidade</label>
              <input
                type="text"
                placeholder="Digitar Cidade"
                required
                name="city"
                value={formData.city}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <label>Rua</label>
          <input
            type="text"
            placeholder="Digitar Rua"
            required
            name="street"
            value={formData.street}
            onChange={handleInputChange}
          />
          <div className="divNumberComplement">
            <div>
              <label>Número</label>
              <input
                type="text"
                placeholder="Digitar número"
                required
                name="number"
                value={formData.number}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Complemento</label>
              <input
                type="text"
                placeholder="Ex. apart 307"
                name="complement"
                value={formData.complement}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <p>Tipo de conta</p>
          <div className="buttonBuyerSeller">
            <Button
              variant="blue"
              className={formData.isSeller === false ? "active" : ""}
              type="button"
              onClick={() => setFormData({ ...formData, isSeller: false })}
            >
              Comprador
            </Button>
            <Button
              variant="white"
              className={formData.isSeller === true ? "active" : ""}
              type="button"
              onClick={() => setFormData({ ...formData, isSeller: true })}
            >
              Anunciante
            </Button>
          </div>
          <label>Senha</label>
          <input
            type="password"
            name="password"
            placeholder="Digitar Senha"
            required={true}
            value={formData.password}
            onChange={handleInputChange}
          />
          <label>Confirmar Senha</label>
          <input
            type="password"
            name="password"
            placeholder="Digitar Senha"
            required={true}
            value={formData.password}
            onChange={handleInputChange}
          />
          <Button variant="blue" type="submit">
            Finalizar Cadastro
          </Button>
        </form>
        {isModalOpen && <Modal isOpen={isModalOpen} onClose={closeModal} />}
      </StyledRegister>
      <Footer />
    </>
  );
}; */

export default Register;
