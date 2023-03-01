import { HomeOTT } from "../components/home/HomeOTT";
import { HumorRank } from "../components/home/HumorRank";
import MoreTrend from "../components/home/MoreTrend";
import { TodayWeather } from "../components/home/TodayWeather";

export default function Home() {
  return (
    <>
      <main className="ml-0 flex h-screen w-full flex-1 flex-col py-4 sm:ml-72 lg:ml-96 lg:flex-row lg:pr-10">
        <section className="w-full bg-white p-5 shadow-lg lg:w-5/12 lg:min-w-[500px]">
          <TodayWeather />
          <HumorRank />
        </section>
        <section className="w-full border-r-2 p-5 lg:w-5/12 lg:min-w-[500px]">
          <HomeOTT />
          <MoreTrend />
        </section>
      </main>
      {/* <div className="absolute bottom-5 right-1 h-20 w-20 rounded-full bg-slate-700"></div> */}
    </>
  );
}
