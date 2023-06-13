import { createContext, useState } from "react";
import { iChildren } from "./types";

interface iUserContextProps {
  isProfileOwner: boolean;
  setIsProfileOwner: React.Dispatch<React.SetStateAction<boolean>>;
}

const UserContext = createContext({} as iUserContextProps);

const UserProvider = ({ children }: iChildren) => {
  const [isProfileOwner, setIsProfileOwner] = useState(true);

  return (
    <UserContext.Provider
      value={{
        isProfileOwner,
        setIsProfileOwner,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
