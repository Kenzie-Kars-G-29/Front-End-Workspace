import { createContext, useState } from "react";
import api from "../../services/api";
import { AnnouncementInfo, InfoUser, InfoUserLogged } from "./interfaces";

interface UserContextProps {
    infosUserLogged: () => void,
    getUserId: (id: string) => void,
    isGetUser: InfoUser | undefined,
    isUserInfo: InfoUserLogged | undefined,
    setIsUserInfo:  React.Dispatch<React.SetStateAction<InfoUserLogged | undefined>>,
    isLoading: boolean,
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
    isSeller: boolean,
    setIsSeller: React.Dispatch<React.SetStateAction<boolean>>,
    isAnnounUser: AnnouncementInfo[],
    setIsAnnounUser:React.Dispatch<React.SetStateAction<AnnouncementInfo[]>>,
    isAnnouncements: AnnouncementInfo[],
    setIsAnnouncements: React.Dispatch<React.SetStateAction<AnnouncementInfo[]>>
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
    const [isGetUser, setIsGetUser] = useState<InfoUser| undefined>(undefined)
    const [isAnnouncements, setIsAnnouncements] = useState<AnnouncementInfo[]>([])
    
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

    const getUserId = async (id: string) => {
      const token = localStorage.getItem("token")
        try {
          api.defaults.headers.common.Authorization = `Bearer ${token}`
          const response = await api.get(`/users/${id}`);

          console.log(response)
    
          const userData = response.data;
          setIsGetUser(userData)
          setIsAnnouncements(userData.announcement)
          setIsLoading(false)
         
        } catch (error) {
          console.log(error);
        }
    }


      

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
    getUserId,
    isGetUser,
    isAnnouncements, 
    setIsAnnouncements
    }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
