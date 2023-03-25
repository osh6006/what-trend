import { useContext, createContext, useState } from "react";
import React from "react";
import { OttDetailObj } from "../api/ott/ott";

type contextProps = {
  children: React.ReactNode;
};

interface OttContextType {
  isMovie: boolean;
  toggleOttSwitch: () => void;
  ottObj: OttDetailObj | undefined;
  setOttObj: React.Dispatch<React.SetStateAction<OttDetailObj | undefined>>;
  isOttObjLoading: boolean;
  setOttObjIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const OttContext = createContext<OttContextType>({
  isMovie: true,
  toggleOttSwitch: () => {},
  ottObj: undefined,
  setOttObj: () => {},
  isOttObjLoading: false,
  setOttObjIsLoading: () => {},
});

export function OttProvider({ children }: contextProps) {
  const [isMovie, setIsMovie] = useState(true);
  const toggleOttSwitch = () => setIsMovie(mode => !mode);
  const [ottObj, setOttObj] = useState<OttDetailObj | undefined>(undefined);
  const [isOttObjLoading, setOttObjIsLoading] = useState(false);

  return (
    <OttContext.Provider
      value={{
        isMovie,
        toggleOttSwitch,
        ottObj,
        setOttObj,
        isOttObjLoading,
        setOttObjIsLoading,
      }}
    >
      {children}
    </OttContext.Provider>
  );
}

export function useOttContext() {
  return useContext(OttContext);
}
