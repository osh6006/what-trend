import Layout from "../components/common/Layout";
import { HomeOTT } from "../components/home/HomeOTT";
import { HumorRank } from "../components/home/HumorRank";
import MoreTrend from "../components/home/MoreTrend";
import { TodayWeather } from "../components/home/TodayWeather";

export default function Home() {
  return (
    <>
      <Layout>
        <section className="relative w-full bg-white p-5 shadow-lg lg:w-5/12 lg:min-w-[500px]">
          <TodayWeather />
          <HumorRank />
        </section>
        <section className="w-full border-r-2 p-5 lg:w-5/12 lg:min-w-[500px]">
          <HomeOTT />
          <MoreTrend />
        </section>
      </Layout>
      {/* <div className="absolute bottom-5 right-1 h-20 w-20 rounded-full bg-slate-700"></div> */}
    </>
  );
}
