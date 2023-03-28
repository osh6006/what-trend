import { useState } from "react";
import { Pollution } from "./Pollution";
import { Week } from "./Week";

const passive: string =
  "cursor-pointer transition-colors hover:text-black  hover:after:-m-3  hover:after:block hover:after:text-center hover:after:content-['•'] hover:after:text-3xl";
const active: string =
  "cursor-pointer select-none text-black after:-m-3 after:block after:text-center after:content-['•'] after:text-3xl";

interface ForeCastProps {
  weatherQuery: any;
  airPollutionQuery: any;
}

export const Forecast = ({
  weatherQuery,
  airPollutionQuery,
}: ForeCastProps) => {
  const [weatherTab, setWeatherTab] = useState<string>("week");

  const handleTab = (e: React.MouseEvent, title: string): void => {
    setWeatherTab(title);
  };
  return (
    <div className="flex flex-col">
      <ul className="flex w-full gap-10 text-2xl font-bold text-gray-400">
        <li
          className={weatherTab === "week" ? active : passive}
          onClick={e => handleTab(e, "week")}
        >
          Week
        </li>
        <li
          className={weatherTab === "pollution" ? active : passive}
          onClick={e => handleTab(e, "pollution")}
        >
          Air Pollution
        </li>
      </ul>
      {weatherTab === "week" && <Week weatherQuery={weatherQuery?.data} />}
      {weatherTab === "pollution" && (
        <Pollution airPollutionQuery={airPollutionQuery?.data} />
      )}
    </div>
  );
};
