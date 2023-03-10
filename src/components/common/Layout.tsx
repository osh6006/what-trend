import React from "react";

export type contextProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: contextProps) {
  return (
    <div className="ml-0 flex h-screen w-full flex-1 flex-col  py-4 sm:ml-72 lg:ml-96 lg:flex-row lg:pr-10">
      {children}
    </div>
  );
}
