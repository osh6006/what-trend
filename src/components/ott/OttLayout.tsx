import React from "react";
import { contextProps } from "../common/Layout";

export const OttLayout = ({ children }: contextProps) => {
  return (
    <div className="mt-0 ml-0 flex h-full w-full flex-col overflow-auto py-2 sm:ml-[250px] lg:ml-[344px] lg:overflow-y-auto lg:overflow-x-hidden xl:flex-row xl:gap-10">
      {children}
    </div>
  );
};
