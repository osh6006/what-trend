import { useQuery, useQueryClient } from "react-query";
import { getAirPolution, getRecentlyWeather } from "../api/openWeather";
import useCurrentLocation from "./useCurrentLocation";

const geolocationOptions = {
  enableHighAccuracy: true,
  timeout: 1000 * 60 * 5, // 1 min (1000 ms * 60 sec * 1 minute = 60 000ms)
  maximumAge: 1000 * 3600 * 24, // 24 hour
};

export default function useWeather(): any {
  const { location: currentLocation, error: currentError } =
    useCurrentLocation(geolocationOptions);

  const queryClient = useQueryClient();

  const homeWeatherQuery = useQuery(
    ["weatherThreeDays", currentLocation],
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
    ["airPollution", currentLocation],
    () => getAirPolution(currentLocation),
    {
      staleTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false,
    }
  );

  const weatherQuery = useQuery(
    ["weatherAll", currentLocation],
    () => getRecentlyWeather(currentLocation),
    {
      staleTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false,
    }
  );

  return { homeWeatherQuery, airPollutionQuery, weatherQuery };
}
