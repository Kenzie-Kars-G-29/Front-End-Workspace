import { Header } from "../../components/Header/Header";
import StyledRegister from "./style";
import Button from "../../components/Button/Button";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    cpf: "",
    celular: "",
    dataNascimento: "",
    descricao: "",
    cep: "",
    estado: "",
    cidade: "",
    rua: "",
    numero: "",
    complemento: "",
    tipoConta: "",
    senha: "",
    confirmarSenha: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
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

    try {
      const response = await axios.post("/users", formData);
      console.log(response.data);

      // Limpar os campos do formulário
      setFormData({
        nome: "",
        email: "",
        cpf: "",
        celular: "",
        dataNascimento: "",
        descricao: "",
        cep: "",
        estado: "",
        cidade: "",
        rua: "",
        numero: "",
        complemento: "",
        tipoConta: "",
        senha: "",
        confirmarSenha: "",
      });

      navigate("/");
    } catch (error) {
      console.error(error);
    }
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
            required={true}
            name="nome"
            value={formData.nome}
            onChange={handleInputChange}
          />
          <label>Email</label>
          <input
            type="text"
            placeholder="Ex. samuel@kenzie.com.br"
            required={true}
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <label>CPF</label>
          <input
            placeholder="000.000.000-00"
            required={true}
            name="cpf"
            value={formData.cpf}
            onChange={handleInputChange}
          />
          <label>Celular</label>
          <input
            placeholder="(DDD) 90000-0000"
            required={true}
            name="celular"
            value={formData.celular}
            onChange={handleInputChange}
          />
          <label>Data de nascimento</label>
          <input placeholder="00/00/00" required={true} />
          <label>Descrição</label>
          <textarea
            placeholder="Digitar descrição"
            name="descricao"
            value={formData.descricao}
            onChange={handleTextAreaChange}
          />
          <p>Informações de endereço</p>
          <label>CEP</label>
          <input placeholder="00000.000" required={true} />
          <div className="divCityState">
            <div>
              <label>Estado</label>
              <input type="text" placeholder="Digitar Estado" required={true} />
            </div>
            <div>
              <label>Cidade</label>
              <input type="text" placeholder="Digitar Cidade" required={true} />
            </div>
          </div>
          <label>Rua</label>
          <input type="text" placeholder="Digitar Rua" required={true} />
          <div className="divNumberComplement">
            <div>
              <label>Número</label>
              <input
                type="number"
                placeholder="Digitar número"
                required={true}
              />
            </div>
            <div>
              <label>Complemento</label>
              <input placeholder="Ex. apart 307" />
            </div>
          </div>
          <p>Tipo de conta</p>
          <div className="buttonBuyerSeller">
            <Button variant="blue">Comprador</Button>
            <Button variant="white">Anunciante</Button>
          </div>
          <label>Senha</label>
          <input type="password" placeholder="Digitar Senha" required={true} />
          <label>Confirmar Senha</label>
          <input type="password" placeholder="Digitar Senha" required={true} />
          <Button variant="blue" type="submit">
            Finalizar Cadastro
          </Button>
        </form>
      </StyledRegister>
    </>
  );
};

export default Register;
