import React from "react";
import { contextProps } from "../common/Layout";

export const SportsLayout = ({ children }: contextProps) => {
  return (
    <div className="mt-0 ml-0 flex h-full w-full flex-col items-center justify-center overflow-x-auto py-2 sm:mt-32 sm:ml-72 xl:mt-20">
      {children}
    </div>
  );
};
