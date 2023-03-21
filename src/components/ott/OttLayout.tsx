import React from "react";
import { contextProps } from "../common/Layout";

export const OttLayout = ({ children }: contextProps) => {
  return (
    <div className="mt-0 ml-0 flex h-screen w-full flex-col py-2 pt-8 sm:ml-[344px] xl:flex-row">
      {children}
    </div>
  );
};
