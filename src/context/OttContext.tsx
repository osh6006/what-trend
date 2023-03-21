import { useContext, createContext, useState } from "react";
import React from "react";

type contextProps = {
  children: React.ReactNode;
};

interface OttContextType {
  isMovie: boolean;
  toggleOttSwitch: () => void;
}

const OttContext = createContext<OttContextType>({
  isMovie: false,
  toggleOttSwitch: () => {},
});

export function OttProvider({ children }: contextProps) {
  const [isMovie, setIsMovie] = useState(false);
  const toggleOttSwitch = () => setIsMovie(mode => !mode);
  return (
    <OttContext.Provider value={{ isMovie, toggleOttSwitch }}>
      {children}
    </OttContext.Provider>
  );
}

export function useOttContext() {
  return useContext(OttContext);
}
