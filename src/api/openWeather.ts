import { City } from "../util/weather";

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
}

export async function getAirPolution(location: Location | undefined) {
  if (location) {
    const res = await fetch(
      `${process.env.REACT_APP_WEATHER_ADDRESS}air_pollution?lat=${location.latitude}&lon=${location.longitude}&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`,
      requestOptions
    );
    return res.json();
  }
  return [];
}

export async function getGeolocation(location: string) {
  if (location) {
    const res = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`,
      requestOptions
    );
    return res.json();
  }
  return [];
}

export async function addCity(city: City) {
  if (city) {
    const getedcity = localStorage.getItem("city");
    const parsedCity = getedcity ? JSON.parse(getedcity) : [];
    parsedCity.push(city);
    localStorage.setItem("city", JSON.stringify(parsedCity));
  }
}

export function getCity(): any {
  try {
    const city = localStorage.getItem("city");
    const parsedCity = city ? JSON.parse(city) : null;
    return parsedCity || [];
  } catch (e) {
    console.error(
      "로컬 스토리지에서 데이터를 가져오는 중 오류가 발생했습니다."
    );
  }
}

export async function removeCity(name: string) {
  if (name !== "" && name) {
    const getedcity = localStorage.getItem("city");
    const parsedCity = getedcity ? JSON.parse(getedcity) : [];

    if (parsedCity.length > 0) {
      const removeCity = parsedCity.filter((data: City) => data.city !== name);
      localStorage.setItem("city", JSON.stringify(removeCity));
    }
  }
}
