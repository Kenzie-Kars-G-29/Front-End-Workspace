import React from "react";
import { ModalRegister } from "./styles";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/signin");
  };

  return (
    <ModalRegister>
      <div className={`modal ${isOpen ? "open" : ""}`}>
        <div className="modal-content">
          <div className="divClose">
            <h3>Sucesso!</h3>
            <button onClick={onClose}>X</button>
          </div>

          <p>Sua conta foi criada com sucess!</p>
          <p>Agora você poderá ver seus negócios crescendo em grande escala</p>
          <Button variant="blue" onClick={goToLogin}>
            Ir para o login
          </Button>
        </div>
      </div>
    </ModalRegister>
  );
};
