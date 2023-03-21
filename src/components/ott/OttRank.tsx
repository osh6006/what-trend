import { useState } from "react";
import { week } from "../../util/weather";
import OttSwitch from "./OttSwitch";

export const OttRank = () => {
  return (
    <section className="mt-5 text-xl font-medium">
      <header className="flex items-center justify-between pr-5">
        <h1>{`${
          week[new Date(new Date().getDay()).getDay()]
        } ${new Intl.DateTimeFormat("en-US", {
          dateStyle: "long",
        }).format(new Date())}`}</h1>
        <OttSwitch />
      </header>
    </section>
  );
};
