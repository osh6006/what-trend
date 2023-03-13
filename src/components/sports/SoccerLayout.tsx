import React from "react";
import { contextProps } from "../common/Layout";

export const SoccerLayout = ({ children }: contextProps) => {
  return (
    <div className="ml-0 flex h-screen w-full flex-1 flex-col py-4 sm:ml-72 lg:ml-96 lg:flex-row lg:pr-10">
      {children}
    </div>
  );
};
