import { TodayWeather } from "../components/home/TodayWeather";

export default function Home() {
  return (
    <>
      <main className="flex flex-1 flex-col py-4 lg:flex-row">
        <section className="w-full bg-white p-5 lg:w-5/12 lg:min-w-[500px]">
          <TodayWeather />
        </section>
        <section className="w-full border-r-2 p-5 lg:w-6/12">second</section>
      </main>
    </>
  );
}
