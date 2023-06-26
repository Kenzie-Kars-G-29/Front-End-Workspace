import { createContext, useEffect, useState } from "react";
import api from "../../services/api";
import { AnnouncementInfo, InfoUserLogged } from "./interfaces";
import { useNavigate } from "react-router";


interface UserContextProps {
    infosUserLogged: () => void,
    isUserInfo: InfoUserLogged | undefined,
    setIsUserInfo:  React.Dispatch<React.SetStateAction<InfoUserLogged | undefined>>,
    isLoading: boolean,
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
    isSeller: boolean,
    setIsSeller: React.Dispatch<React.SetStateAction<boolean>>,
    isAnnounUser: AnnouncementInfo[],
    setIsAnnounUser:React.Dispatch<React.SetStateAction<AnnouncementInfo[]>>,
    handleLogout: () => void
}

interface UserProviderProps {
  children: React.ReactNode;
}

const UserContext = createContext({} as UserContextProps);

const UserProvider = ({ children }: UserProviderProps) => {
    const [isUserInfo, setIsUserInfo] = useState<InfoUserLogged | undefined>(undefined)
    const [isAnnounUser, setIsAnnounUser] = useState<AnnouncementInfo[]>([]);
    const [isLoading, setIsLoading] = useState(true)
    const [isSeller, setIsSeller]= useState(false)
    const navigate = useNavigate()
  
    
    const infosUserLogged = async () => {        
        const token = localStorage.getItem("token")
        
        try {
          api.defaults.headers.common.Authorization = `Bearer ${token}`
          const response = await api.get("/users/userlogged");
    
          const userData = response.data;
          const announData = response.data.announcement
          
          setIsUserInfo(userData)
          setIsAnnounUser(announData)
          setIsLoading(false)
          setIsSeller(userData.isSeller)
         
        } catch (error) {
          console.log(error);
        }
      };


      const handleLogout = () => {
        // Limpar o localStorage
        localStorage.removeItem("token");
      
        // Navegar para a página inicial
        navigate("/");
      };

  return (
    <UserContext.Provider value={{infosUserLogged, 
    isUserInfo, 
    setIsUserInfo, 
    isLoading, 
    setIsLoading, 
    isSeller, 
    setIsSeller,
    isAnnounUser,
    setIsAnnounUser,
    handleLogout 
    }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
