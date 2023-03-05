const requestOptions = {
  method: "GET",
};

interface Location {
  latitude: number;
  longitude: number;
}

export async function getRecentlyWeather(location: Location | undefined) {
  if (location) {
    const res = await fetch(
      `${process.env.REACT_APP_WEATHER_ADDRESS}forecast?lat=${location.latitude}&lon=${location.longitude}&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`,
      requestOptions
    );
    return res.json();
  }

  return [];
}

export async function getAirPolution(location: Location | undefined) {
  if (location) {
    const res = await fetch(
      `${process.env.REACT_APP_WEATHER_ADDRESS}air_pollution?lat=${location.latitude}&lon=${location.longitude}&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`
    );
    return res.json;
  }
  return [];
}
