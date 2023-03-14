import React from "react";
import { contextProps } from "../common/Layout";

export const SoccerLayout = ({ children }: contextProps) => {
  return (
    <div className="ml-0 flex w-full flex-col overflow-auto py-2 sm:ml-72 lg:ml-96 lg:pr-10 2xl:h-screen">
      {children}
    </div>
  );
};
