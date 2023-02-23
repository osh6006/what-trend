import { useQuery, useMutation, useQueryClient } from "react-query";
import { getRecentlyWeather } from "../api/openWeather";
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
  const weatherQuery = useQuery(
    ["weatherThreeDays", currentLocation],
    () => getRecentlyWeather(currentLocation),
    {
      staleTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false,
    }
  );

  // eslint-disable-next-line array-callback-return
  const threeDays = weatherQuery?.data?.list?.filter((data: any, i: number) => {
    if (i === 1 || i === 8 || i === 17) {
      return true;
    }
  });

  return { weatherQuery, threeDays };
}
