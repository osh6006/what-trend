import { useState } from "react";
import useWeather from "../../hooks/useWeather";
import { Pollution } from "./Pollution";
import { Week } from "./Week";

const passive: string =
  "cursor-pointer transition-colors hover:text-black  hover:after:-m-3  hover:after:block hover:after:text-center hover:after:content-['•']";
const active: string =
  "cursor-pointer select-none text-black after:-m-3 after:block after:text-center after:content-['•']";

export const Forecast = () => {
  const { weatherQuery, airPollutionQuery } = useWeather();
  const [weatherTab, setWeatherTab] = useState<string>("week");

  const handleTab = (e: React.MouseEvent, title: string): void => {
    setWeatherTab(title);
  };
  return (
    <section className="mt-10">
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
      {weatherTab === "week" && <Week />}
      {weatherTab === "pollution" && <Pollution />}
    </section>
  );
};
