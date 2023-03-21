import React from "react";
import { contextProps } from "../common/Layout";

export const OttLayout = ({ children }: contextProps) => {
  return (
    <div className="mt-0 ml-0 flex h-full w-full flex-col py-2 sm:ml-[344px] xl:mt-8">
      {children}
    </div>
  );
};
