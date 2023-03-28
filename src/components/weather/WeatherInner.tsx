import React from "react";

type contextProps = {
  children: React.ReactNode;
};

export const WeatherInner = ({ children }: contextProps) => {
  return (
    <section className="w-full overflow-y-auto overflow-x-hidden px-3 py-3 shadow-lg lg:w-6/12 lg:min-w-[500px] ">
      {children}
    </section>
  );
};
