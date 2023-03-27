import { useLocation } from "react-router-dom";
import { Loading } from "../../components/common/Loading";
import { Forecast } from "../../components/weather/Forecast";
import { Search } from "../../components/weather/Search";
import { SelectCity } from "../../components/weather/SelectCity";
import { Today } from "../../components/weather/Today";
import useWeather from "../../hooks/useWeather";

export const SearchWeather = () => {
  const { state } = useLocation();
  const { weatherQuery, airPollutionQuery } = useWeather(state);

  return (
    <>
      <section className="ml-0 flex h-screen w-full flex-1 flex-col gap-10 py-4 sm:ml-72 lg:ml-96 lg:flex-row lg:pr-10">
        {weatherQuery.isLoading && airPollutionQuery.isLoading && <Loading />}
        {airPollutionQuery.isLoading || weatherQuery.isLoading || (
          <>
            <section className="w-full overflow-y-scroll p-5 shadow-lg lg:w-6/12 lg:min-w-[500px]">
              <Search />
              <h1 className="mt-3 text-5xl">
                Weather <strong>Forecast</strong>
              </h1>
              <SelectCity />
              <Forecast
                weatherQuery={weatherQuery}
                airPollutionQuery={airPollutionQuery}
              />
            </section>
            <section className="w-full overflow-hidden border-r-2 bg-secondaryBg p-5 shadow-lg lg:w-[45%] lg:min-w-[600px] 2xl:rounded-r-2xl">
              <Today weatherQuery={weatherQuery} />
              <div></div>
            </section>
          </>
        )}
      </section>
    </>
  );
};
