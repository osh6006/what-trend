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
      `${process.env.REACT_APP_ADDRESS}?lat=${location.latitude}&lon=${location.longitude}&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`,
      requestOptions
    );
    return res.json();
  }

  return [];
}
