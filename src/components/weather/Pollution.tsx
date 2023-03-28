import React from "react";
import { AirQuality } from "../../util/weather";
import AirEmotion from "./AirEmotion";

type PollutionBgTypes = {
  [key: number]: string;
};

const commonClass: string = "mt-10 flex flex-col gap-5 rounded-lg px-5 py-12";

const pollutionBg: PollutionBgTypes = {
  1: `bg-blue-500 ${commonClass}`,
  2: `bg-sky-500 ${commonClass}`,
  3: `bg-green-500 ${commonClass}`,
  4: `bg-orange-500 ${commonClass}`,
  5: `bg-red-500 ${commonClass}`,
};

export const Pollution = ({ airPollutionQuery }: any) => {
  const airpollution = airPollutionQuery?.list[0];

  return (
    <section className={pollutionBg[airpollution?.main?.aqi ?? 0]}>
      <div className="flex w-full flex-col items-center justify-center gap-2">
        <AirEmotion airQuality={airpollution?.main?.aqi} />
        <h1 className="text-3xl font-bold text-white">
          {AirQuality.get(airpollution?.main?.aqi)?.message}
        </h1>
        <div className="mt-5 grid grid-cols-3 gap-2 whitespace-pre-line rounded-md border-2 px-4 py-5 text-xl font-bold uppercase text-white">
          <h1>{`CO : ${airpollution?.components.co}`}</h1>
          <h1>{`NO : ${airpollution?.components.no}`}</h1>
          <h1>{`no2 : ${airpollution?.components.no2}`}</h1>
          <h1>{`o3 : ${airpollution?.components.o3}`}</h1>
          <h1>{`so2 : ${airpollution?.components.so2}`}</h1>
          <h1>{`pm2_5 : ${airpollution?.components.pm2_5}`}</h1>
          <h1>{`pm10 : ${airpollution?.components.pm10}`}</h1>
          <h1>{`nh3 : ${airpollution?.components.nh3}`}</h1>
        </div>
      </div>
    </section>
  );
};
