export async function getRecentlyWeather<T>(): Promise<T> {
  return fetch(
    "api.openweathermap.org/data/2.5/forecast?lat=36.4791&lon=127.0931&appid=f79ff78b6d115afb2c171b3d1759d92e"
  )
    .then(response => response.json())
    .then(result => result)
    .catch(error => console.log("error", error));
}

export const getThreeDaysWeather = (): void => {};
