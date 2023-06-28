import { useContext, useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import bars from "../../assets/bars.svg";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import HeaderStyled from "./styles";
import logout from "../../assets/logout.jpg";

export const Header = ({ isUserInfo }: { isUserInfo: any }) => {
  const navigate = useNavigate();
  const navigateLogin = () => {
    navigate("/signin");
  };

  const navigateRegister = () => {
    navigate("/register");
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/signin");
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
            {isUserInfo ? (
              <>
                <span className="username">{isUserInfo.name}</span>
                <button className="buttonLogout" onClick={handleLogout}>
                  <img className="logout" src={logout} alt="Menu" />
                </button>
              </>
            ) : (
              <>
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
              </>
            )}
          </div>
        </div>
      </div>
    </HeaderStyled>
  );
};
/* export const Header = () => {
  const navigate = useNavigate();
  const navigateLogin = () => {
    navigate("/signin");
  };

  const navigateRegister = () => {
    navigate("/register");
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  return (
    <HeaderStyled>
      <div className="divContainer">
        <img className="logo" alt="" src={logo} onClick={() => navigate("/")} />
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
}; */
