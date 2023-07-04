import { createContext, useState } from "react";
import api from "../../services/api";
import { AnnouncementInfo, InfoUser, InfoUserLogged } from "./interfaces";
import { useNavigate } from "react-router-dom";

interface UserContextProps {
  infosUserLogged: () => void;
  getUserId: (id: string) => void;
  isGetUser: InfoUser | undefined;
  isUserInfo: InfoUserLogged | undefined;
  setIsUserInfo: React.Dispatch<
    React.SetStateAction<InfoUserLogged | undefined>
  >;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  isSeller: boolean;
  setIsSeller: React.Dispatch<React.SetStateAction<boolean>>;
  isAnnounUser: AnnouncementInfo[];
  setIsAnnounUser: React.Dispatch<React.SetStateAction<AnnouncementInfo[]>>;
  isAnnouncements: AnnouncementInfo[];
  setIsAnnouncements: React.Dispatch<React.SetStateAction<AnnouncementInfo[]>>;
  filteredAnnouncements: AnnouncementInfo[];
  setFilteredAnnouncements: React.Dispatch<
    React.SetStateAction<AnnouncementInfo[]>
  >;
  listAnnouncements: () => Promise<void>;
  isDataAnnouncement: AnnouncementInfo[];
  setDataAnnouncement: React.Dispatch<React.SetStateAction<AnnouncementInfo[]>>;
  isLoadingAnnouncement: boolean;
  setIsLoadingAnnoucement: React.Dispatch<React.SetStateAction<boolean>>;
}

interface UserProviderProps {
  children: React.ReactNode;
}

const UserContext = createContext({} as UserContextProps);

const UserProvider = ({ children }: UserProviderProps) => {
  const navigate = useNavigate();

  const [isUserInfo, setIsUserInfo] = useState<InfoUserLogged | undefined>(
    undefined
  );
  const [isAnnounUser, setIsAnnounUser] = useState<AnnouncementInfo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingAnnouncement, setIsLoadingAnnoucement] = useState(true);
  const [isSeller, setIsSeller] = useState(false);
  const [isGetUser, setIsGetUser] = useState<InfoUser | undefined>(undefined);
  const [isAnnouncements, setIsAnnouncements] = useState<AnnouncementInfo[]>(
    []
  );
  const [filteredAnnouncements, setFilteredAnnouncements] = useState<
    AnnouncementInfo[]
  >([]);
  const [isDataAnnouncement, setDataAnnouncement] = useState<
    AnnouncementInfo[]
  >([]);

  const listAnnouncements = async () => {
    try {
      const response = await api.get("/announcement");

      const announData = response.data;

      setDataAnnouncement(announData);
      setIsLoadingAnnoucement(false);
    } catch (error) {
      console.log(error);
    }
  };

  const infosUserLogged = async () => {
    const token = localStorage.getItem("token");

    if (token) {
      try {
        api.defaults.headers.common.Authorization = `Bearer ${token}`;
        const response = await api.get("/users/userlogged");

        const userData = response.data;
        const announData = response.data.announcements;

        setIsUserInfo(userData);
        setIsAnnounUser(announData);
        setIsLoading(false);
        setIsSeller(userData.isSeller);
        console.log(userData);

        if (response.status == 401) {
          localStorage.clear();
          navigate("/");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const getUserId = async (id: string) => {
    const token = localStorage.getItem("token");
    try {
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      const response = await api.get(`/users/${id}`);
      const userData = response.data;

      setIsGetUser(userData);
      setIsAnnouncements(userData.announcements);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <UserContext.Provider
      value={{
        infosUserLogged,
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
        setIsAnnouncements,
        filteredAnnouncements,
        setFilteredAnnouncements,
        listAnnouncements,
        isDataAnnouncement,
        setDataAnnouncement,
        isLoadingAnnouncement,
        setIsLoadingAnnoucement,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
