import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  addCity,
  getAirPolution,
  getCity,
  getGeolocation,
  getRecentlyWeather,
  removeCity,
} from "../api/openWeather";
import { calWeather, City } from "../util/weather";
import useCurrentLocation, { defaultLocation } from "./useCurrentLocation";

const geolocationOptions = {
  enableHighAccuracy: true,
  timeout: 1000 * 60 * 5, // 1 min (1000 ms * 60 sec * 1 minute = 60 000ms)
  maximumAge: 1000 * 3600 * 24, // 24 hour
};

const TimeArr: string[] = ["06:00:00", "09:00:00", "15:00:00", "21:00:00"];

export default function useWeather(search?: any): any {
  const { location: currentLocation } = useCurrentLocation(geolocationOptions);
  const queryClient = useQueryClient();

  const homeWeatherQuery = useQuery(
    [
      "weatherThreeDays",
      (currentLocation && currentLocation) || defaultLocation,
    ],
    () => getRecentlyWeather(currentLocation),
    {
      staleTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false,
      select: (data: any) => {
        const city = data?.city;
        const threeDays = data.list?.filter((data: any, i: number) => {
          if (i === 4 || i === 12 || i === 20) {
            return true;
          } else {
            return false;
          }
        });
        return { threeDays, city };
      },
    }
  );

  const airPollutionQuery = useQuery(
    ["airPollution", (search && search) || currentLocation || defaultLocation],
    () =>
      getAirPolution((search && search) || currentLocation || defaultLocation),
    {
      staleTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false,
    }
  );

  const weatherQuery = useQuery(
    ["weatherAll", (search && search) || currentLocation || defaultLocation],
    () =>
      getRecentlyWeather(
        (search && search) || currentLocation || defaultLocation
      ),
    {
      staleTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false,
      select: (data: any) => {
        const city = data?.city;
        const today: any = data?.list && calWeather(data?.list, 0);
        const fiveDays = data.list?.filter((data: any, i: number) => {
          const date = data.dt_txt.split(" ")[1];
          const day = data.dt_txt.split(" ")[0];
          if (
            new Date(Date.now()).getDay() !== new Date(day).getDay() &&
            TimeArr.includes(date)
          ) {
            return true;
          } else {
            return false;
          }
        });

        const calFourDays: any = [];
        for (let i = 0; i < 4; i++) {
          calFourDays.push(calWeather(fiveDays && fiveDays, i + 1));
        }

        return { calFourDays, city, today };
      },
    }
  );

  const searchLocation = useMutation((location: string) =>
    getGeolocation(location)
  );

  const addCitytoStorage = useMutation((city: City) => addCity(city), {
    onSuccess: () => {
      queryClient.invalidateQueries("getCity");
    },
  });
  const removeCityFromStorage = useMutation(
    (name: string) => removeCity(name),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("getCity");
      },
    }
  );

  const getCityFromStorage = useQuery(["getCity"], () => getCity());

  return {
    homeWeatherQuery,
    airPollutionQuery,
    weatherQuery,
    searchLocation,
    getCityFromStorage,
    addCitytoStorage,
    removeCityFromStorage,
  };
}
