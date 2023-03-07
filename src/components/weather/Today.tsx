import React from "react";
import useWeather from "../../hooks/useWeather";
import { getDayOfWeek, KALBIN } from "../../util/weather";
import { TodayGraph } from "./TodayGraph";

export const Today = () => {
  const { weatherQuery } = useWeather();
  const today = weatherQuery?.data?.today;
  const city = weatherQuery?.data?.city;

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-5 text-white">
      <div className="flex items-center gap-3">
        <div>
          <img
            src={`http://openweathermap.org/img/wn/${today?.combinationDay?.weather[0]?.icon.slice(
              0,
              2
            )}d@2x.png`}
            alt="weatherIcon"
            className="h-20 w-20"
          />
        </div>
        <div>
          <h1 className="text-3xl">Today</h1>
          <h3 className="text-gray-400">{`${getDayOfWeek(
            "today"
          )}, ${new Intl.DateTimeFormat("en-GB", {
            dateStyle: "medium",
          }).format(new Date())}`}</h3>
        </div>
      </div>
      <div className="flex gap-1">
        <span className="text-9xl">
          {Math.floor(
            today?.combinationDay?.main?.temp / today?.calDay?.length - KALBIN
          )}
        </span>
        <span className="mt-2 text-3xl">&#8451;</span>
      </div>
      <h2 className="text-xl text-gray-400">{`${city?.name}, ${city?.country}`}</h2>
      <div className="text-xl capitalize text-gray-400">{`Feels like ${Math.floor(
        today?.combinationDay?.feels_like / today?.calDay?.length
      )} · ${today?.combinationDay?.weather[0]?.description}`}</div>
      <TodayGraph today={today} />
    </div>
  );
};
