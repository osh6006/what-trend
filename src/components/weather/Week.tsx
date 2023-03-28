import React from "react";
import { IoIosWater } from "react-icons/io";
import { getAMPM, KALBIN } from "../../util/weather";

export const Week = ({ weatherQuery }: any) => {
  console.log(weatherQuery);

  return (
    <section className="mt-5 flex flex-col gap-5 rounded-lg bg-gray-300 px-5 py-5">
      {weatherQuery?.calFourDays?.map(
        (data: any, i: number) =>
          data && (
            <div
              className="flex w-full flex-col items-center justify-center gap-2 border-2 border-white py-2 2xl:flex-row 2xl:items-center 2xl:justify-around 2xl:gap-0 2xl:border-none 2xl:p-0"
              key={i}
            >
              <h3 className="text-xl ">{data?.combinationDay?.DayOfTheWeek}</h3>
              <div className="flex items-center justify-center gap-1 text-lg xl:flex-col xl:gap-0 ">
                <IoIosWater className="text-2xl text-blue-600" />
                {`${Math.floor(
                  data?.combinationDay?.main?.humidity / data?.calDay?.length
                )} %`}
              </div>
              <div className="">
                <img
                  src={`http://openweathermap.org/img/wn/${data?.combinationDay?.weather[0]?.icon.slice(
                    0,
                    2
                  )}d@2x.png`}
                  alt="weatherIcon"
                  className="h-10 w-10"
                />
              </div>
              <h3 className="text-xl ">
                {Math.floor(
                  data?.combinationDay?.main?.temp / data?.calDay?.length -
                    KALBIN
                ).toFixed(0)}
                &#8451;
              </h3>
              <div className="flex items-center justify-center gap-2 md:gap-10 2xl:basis-80 2xl:gap-5 ">
                {data?.calDay?.map((data: any) => (
                  <div
                    className="flex flex-col items-center justify-center gap-2 rounded-full border-2 px-2 py-3 text-base"
                    key={data?.dt}
                  >
                    <h4>{getAMPM(data?.dt_txt.split(" ")[1].slice(0, 2))}</h4>
                    <div className="flex items-center justify-center rounded-full border bg-sky-300 p-1">
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
          )
      )}
    </section>
  );
};
