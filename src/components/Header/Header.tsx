import { useContext, useEffect, useState } from "react";
import logo from "../../assets/logo.png"
import bars from "../../assets/bars.svg"
import {useNavigate} from "react-router-dom"
import Button from "../Button/Button"
import HeaderStyled from "./styles";

export const Header = () => {
  const navigate = useNavigate();
  const navigateLogin = () => {
    navigate('/login') 
  };
  const navigateRegister = () => {
    navigate('/register')
  }

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const isDesktop = window.matchMedia("(min-width: 769px)").matches;
    setIsMenuOpen(isDesktop);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <HeaderStyled>
      <div className="divContainer">
        <img className="logo" alt="" src={logo} />
        <div className="menuIcon" onClick={toggleMenu}>
          <img src={bars} alt="Menu" />
        </div>
        <div className={`menuWrapper ${isMenuOpen ? 'show' : ''}`}>
          <Button variant="white" onClick={navigateLogin}>
            Fazer Login
          </Button>
          <Button variant="white" onClick={navigateRegister}>
            Cadastrar
          </Button>
        </div>
      </div>
    </HeaderStyled>
  );
  
  
  
  
  
  
  
};




  /* return (
    <HeaderStyled>
      <div className="divContainer">
        <img className="logo" alt="" src={logo} />
        <div className="divIcons">
        <Button variant="white" onClick={navigateLogin} >Fazer Login</Button>
         <Button variant="white" >Cadastrar</Button>
        </div>
      </div>
    </HeaderStyled>
  ); */


