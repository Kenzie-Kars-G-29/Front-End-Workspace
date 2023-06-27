import { useContext, useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import bars from "../../assets/bars.svg";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import HeaderStyled from "./styles";

export const Header = () => {
  const navigate = useNavigate();
  const navigateLogin = () => {
    navigate("/signin");
  };

  const navigateRegister = () => {
    navigate("/register");
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      const isDesktop = window.matchMedia("(min-width: 769px)").matches;
      setIsMenuOpen(isDesktop);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleLogin = () => {
    const loggedInUserName = "Nome da Pessoa Logada"; // Obtenha o nome da pessoa logada do backend
    setLoggedInUser(loggedInUserName);
  };

  return (
    <HeaderStyled>
      <div className="divContainer">
        <img className="logo" alt="" src={logo} />
        <div className="menuIcon" onClick={toggleMenu}>
          <img src={bars} alt="Menu" />
        </div>
        <div className={`menuWrapper ${isMenuOpen ? "show" : ""}`}>
          <div className="menuButtons">
            <button className="buttonLogin" onClick={navigateLogin}>
              Fazer Login
            </button>
            <Button
              className="buttonRegister"
              variant="white"
              onClick={navigateRegister}
            >
              Cadastrar
            </Button>
          </div>
        </div>
      </div>
    </HeaderStyled>
  );
};
