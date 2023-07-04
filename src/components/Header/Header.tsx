import { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import bars from "../../assets/bars.svg";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import HeaderStyled from "./styles";
import logout from "../../assets/logout.jpg";
import api from "../../services/api";

export const Header = ({ isUserInfo }: { isUserInfo: any }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userInfo, setUserInfo] = useState<any>(null);

  const navigate = useNavigate();
  const navigateLogin = () => {
    navigate("/signin");
  };

  const navigateRegister = () => {
    navigate("/register");
  };

  const navigateHome = () => {
    navigate("/");
  };

  const navigateProfileUserLogged = () => {
    navigate("/ProfileViewAdmin");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/signin");
  };

  const getInitials = (name: string) => {
    const names = name.split(" ");
    const initials = names
      .map((name) => name.charAt(0))
      .join("")
      .toUpperCase();

    return initials.substring(0, 2); // Limita as iniciais a no máximo 2 letras
  };

  useEffect(() => {
    const fetchUserInfo = async () => {
      const token = localStorage.getItem("token");
      try {
        api.defaults.headers.common.Authorization = `Bearer ${token}`;
        const response = await api.get("/users/userlogged");
        const userInfo = response.data;
        setUserInfo(userInfo);
      } catch (error) {
        console.error("Failed to fetch user info:", error);
      }
    };

    fetchUserInfo();
  }, []);

  return (
    <HeaderStyled>
      <div className="divContainer">
        <img className="logo" alt="" src={logo} onClick={navigateHome} />
        <div className="menuIcon" onClick={toggleMenu}>
          <img src={bars} alt="Menu" />
        </div>
        <div className={`menuWrapper ${isMenuOpen ? "show" : ""}`}>
          <div className="menuButtons">
            {userInfo ? (
              <div className="userContainer">
                <span className="initialsCircle">
                  {getInitials(userInfo.name)}
                </span>
                <span className="username" onClick={navigateProfileUserLogged}>
                  {userInfo.name}
                </span>
                <button className="buttonLogout" onClick={handleLogout}>
                  <img className="logout" src={logout} alt="Menu" />
                </button>
              </div>
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
