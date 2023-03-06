import React from "react";
import { IoIosWater } from "react-icons/io";
import { getAMPM, KALBIN } from "../../util/weather";

export const Week = ({ weatherQuery }: any) => {
  console.log(weatherQuery);
  return (
    <section className="mt-10 flex flex-col gap-10 rounded-lg bg-gray-300 px-5 py-10">
      {weatherQuery?.calFourDays?.map((data: any, i: number) => (
        <div className="flex w-full items-center" key={i}>
          <h3 className="basis-20 text-xl">
            {data?.combinationDay?.DayOfTheWeek}
          </h3>
          <div className="flex basis-40 items-center justify-center gap-2 text-lg">
            <IoIosWater className="text-2xl text-blue-600" />
            {`${Math.floor(
              data?.combinationDay?.main?.humidity / data?.calDay?.length
            )} %`}
          </div>
          <div className="basis-28">
            <img
              src={`http://openweathermap.org/img/wn/${data?.combinationDay?.weather[0]?.icon.slice(
                0,
                2
              )}d@2x.png`}
              alt="weatherIcon"
              className="h-10 w-10"
            />
          </div>
          <h3 className="flex-1 text-xl">
            {Math.floor(
              data?.combinationDay?.main?.temp / data?.calDay?.length - KALBIN
            ).toFixed(0)}
            &#8451;
          </h3>
          <div className="flex gap-5">
            {data?.calDay?.map((data: any) => (
              <div
                className="flex flex-col items-center justify-center gap-2 text-base"
                key={data?.dt}
              >
                <h4>{getAMPM(data?.dt_txt.split(" ")[1].slice(0, 2))}</h4>
                <div className="flex items-center justify-center rounded-full bg-sky-300 p-1">
                  <img
                    src={`http://openweathermap.org/img/wn/${data?.weather[0]?.icon.slice(
                      0,
                      2
                    )}d@2x.png`}
                    alt="weatherIcon"
                    className="aspect-square h-7 w-7"
                  />
                </div>
                <h4>
                  {Math.floor(data?.main?.temp - KALBIN)}
                  &#8451;
                </h4>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};
