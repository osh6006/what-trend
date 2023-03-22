import { week } from "../../util/weather";
import OttSwitch from "./OttSwitch";
import { OttTable } from "./OttTable";
import { OttTop3 } from "./OttTop3";

export const OttRank = () => {
  return (
    <section className="mt-5 text-xl font-medium">
      <header className="flex items-center justify-between pr-5">
        <h1 className="text-2xl">{`${
          week[new Date(new Date().getDay()).getDay()]
        } ${new Intl.DateTimeFormat("en-US", {
          dateStyle: "long",
        }).format(new Date())}`}</h1>
        <OttSwitch />
      </header>
      <OttTop3 />
      <OttTable />
    </section>
  );
};
