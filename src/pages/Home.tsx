import React from "react";
import { Button } from "../components/Button";
import useWeather from "../hooks/useWeather";

const DATE = new Intl.DateTimeFormat("en-US", {
  dateStyle: "medium",
}).format(new Date());

export default function Home() {
  const handleClick = (e: React.MouseEvent): void => {};
  const { threeDays } = useWeather();
  console.log(threeDays);
  return (
    <>
      <main className="flex flex-1 flex-col py-4 lg:flex-row">
        <section className="w-full bg-white p-5 lg:w-5/12 lg:min-w-[500px]">
          <div className="flex w-full items-center justify-between">
            <div>
              <h1 className="text-xl font-medium">Weather Trends</h1>
              <h6 className="font-thin text-neutral-500">{DATE}</h6>
            </div>
            <Button title="more view" onClick={handleClick} />
          </div>
        </section>
        <section className="w-full border-r-2 p-5 lg:w-6/12">second</section>
      </main>
    </>
  );
}
