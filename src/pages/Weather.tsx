import { Loading } from "../components/common/Loading";
import { Forecast } from "../components/weather/Forecast";
import { Search } from "../components/weather/Search";
import { SelectCity } from "../components/weather/SelectCity";
import { Today } from "../components/weather/Today";
import { WeatherInner } from "../components/weather/WeatherInner";
import { WeatherLayout } from "../components/weather/WeatherLayout";
import { WeatherContextProvider } from "../context/WeatherContext";
import useWeather from "../hooks/useWeather";

export default function Weather() {
  const { weatherQuery, airPollutionQuery } = useWeather();

  return (
    <WeatherContextProvider>
      <WeatherLayout>
        {weatherQuery.isLoading && airPollutionQuery.isLoading && <Loading />}
        {airPollutionQuery.isLoading || weatherQuery.isLoading || (
          <>
            <WeatherInner>
              <Search />
              <h1 className="mt-3 text-5xl">
                Weather <strong>Forecast</strong>
              </h1>
              <SelectCity />
              <Forecast
                weatherQuery={weatherQuery}
                airPollutionQuery={airPollutionQuery}
              />
            </WeatherInner>
            <section className="w-full border-r-2 bg-secondaryBg p-5 shadow-lg lg:w-[45%] lg:min-w-[600px] 2xl:rounded-r-2xl">
              <Today weatherQuery={weatherQuery} />
            </section>
          </>
        )}
      </WeatherLayout>
    </WeatherContextProvider>
  );
}
