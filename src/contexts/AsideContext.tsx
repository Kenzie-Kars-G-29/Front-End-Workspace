import { createContext, useState } from "react";
import { iChildren } from "./types";

interface iAsideContextProps {
  showAside: boolean;
  setShowAside: React.Dispatch<React.SetStateAction<boolean>>;
}

const AsideContext = createContext({} as iAsideContextProps);

const AsideProvider = ({ children }: iChildren) => {
  const [showAside, setShowAside] = useState(false);

  return (
    <AsideContext.Provider
      value={{
        showAside,
        setShowAside,
      }}
    >
      {children}
    </AsideContext.Provider>
  );
};

export { AsideProvider, AsideContext };
