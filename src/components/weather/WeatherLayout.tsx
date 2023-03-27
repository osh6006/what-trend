import React from "react";

type contextProps = {
  children: React.ReactNode;
};

export const WeatherLayout = ({ children }: contextProps) => {
  return (
    <div className="ml-0 flex h-screen w-full flex-1 flex-col gap-10 py-4 sm:ml-72 lg:ml-96 lg:flex-row lg:pr-10">
      {children}
    </div>
  );
};
