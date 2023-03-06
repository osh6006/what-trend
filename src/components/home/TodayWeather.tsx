/* eslint-disable array-callback-return */
import React from "react";
import { useNavigate } from "react-router-dom";
import useWeather from "../../hooks/useWeather";
import { KALBIN } from "../../util/weather";
import { Button } from "../common/Button";

const DATE = new Intl.DateTimeFormat("en-US", {
  dateStyle: "medium",
}).format(new Date());

export const TodayWeather = () => {
  const nav = useNavigate();
  const handleClick = (e: React.MouseEvent): void => {
    nav("/weather");
  };
  const { homeWeatherQuery } = useWeather();

  return (
    <>
      <div className="mt-5 flex w-full items-center justify-between">
        <div>
          <h1 className="text-xl font-medium">Weather Trends</h1>
          <h6 className="font-thin text-neutral-500">{DATE}</h6>
        </div>
        <Button title="more view" onClick={handleClick} />
      </div>
      <div className="mt-5 flex w-full items-center">
        <div className="flex w-full gap-2">
          <h1 className="text-xl">{homeWeatherQuery?.data?.city?.name}</h1>
          <h1 className="text-xl">{homeWeatherQuery?.data?.city?.country}</h1>
        </div>
      </div>
      <div className="mt-3 flex w-full flex-col justify-around gap-3 md:flex-row">
        {!homeWeatherQuery.isLoading &&
          homeWeatherQuery?.data?.threeDays?.map((data: any, i: number) => (
            <div
              key={data?.dt}
              className="flex items-center justify-between rounded-lg p-3 shadow-md md:flex-col"
            >
              <div className="flex items-center text-xl md:flex-col 2xl:flex-row">
                <div>
                  <h2 className="font-bold">{data?.weather[0]?.main}</h2>
                  <p className="text-center text-lg font-bold">
                    {(data?.main.temp - KALBIN).toFixed(0)}
                    &#8451;
                  </p>
                </div>
                <img
                  src={`http://openweathermap.org/img/wn/${data?.weather[0]?.icon.slice(
                    0,
                    2
                  )}d@2x.png`}
                  alt="weatherIcon"
                  className="h-28 w-28"
                />
              </div>
              {i === 0 && <p className="text-center text-lg ">Today</p>}
              {i === 1 && <p className="text-center text-lg ">Tomorrow</p>}
              {i === 2 && <p className="text-center text-lg">Two days later</p>}
            </div>
          ))}
      </div>
    </>
  );
};
