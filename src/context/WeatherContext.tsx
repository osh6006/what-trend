import { useContext, createContext } from "react";
import React from "react";

type contextProps = {
  children: React.ReactNode;
};

type ThemeContextType = any;

const WeatherContext = createContext<ThemeContextType>(undefined);

export function WeatherContextProvider({ children }: contextProps) {
  return (
    <WeatherContext.Provider value={true}>{children}</WeatherContext.Provider>
  );
}

export function useWeatherContext() {
  return useContext(WeatherContext);
}
