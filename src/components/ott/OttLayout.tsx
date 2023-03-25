import React from "react";
import { contextProps } from "../common/Layout";

export const OttLayout = ({ children }: contextProps) => {
  return (
    <div className="mt-0 ml-0 flex h-full w-full flex-col overflow-auto py-2 sm:ml-[250px] sm:pt-8 lg:ml-[344px] lg:h-screen xl:flex-row">
      {children}
    </div>
  );
};
