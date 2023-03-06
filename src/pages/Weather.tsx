import React from "react";
import { Forecast } from "../components/weather/Forecast";
import { Search } from "../components/weather/Search";
import { SelectCity } from "../components/weather/SelectCity";
import { WeatherContextProvider } from "../context/WeatherContext";

export default function Weather() {
  return (
    <WeatherContextProvider>
      <main className="ml-0 flex h-full w-full flex-1 flex-col py-4 sm:ml-72 lg:ml-96 lg:flex-row lg:pr-10">
        <section className="w-full p-5 shadow-lg lg:w-6/12 lg:min-w-[500px]">
          <Search />
          <h1 className="mt-3 text-5xl">
            Weather <strong>Forecast</strong>
          </h1>
          <SelectCity />
          <Forecast />
        </section>
        <section className="w-full rounded-r-2xl border-r-2 bg-slate-900 p-5 shadow-lg lg:w-5/12 lg:min-w-[500px]"></section>
      </main>
    </WeatherContextProvider>
  );
}
