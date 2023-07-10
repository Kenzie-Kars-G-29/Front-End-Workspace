import logo from "../../assets/logo-branca.png";
import seta from "../../assets/botao-seta.png";
import FooterStyled from "./styles";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <FooterStyled>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="text">© 2022 - Todos os direitos reservados.</div>
      <div className="button">
        <button className="seta" onClick={scrollToTop}>
          <img src={seta} alt="Seta para cima" />
        </button>
      </div>
    </FooterStyled>
  );
};
