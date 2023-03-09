interface AirQualityOpts {
  message: string;
}

export const KALBIN = 273.15;

export const AirQuality = new Map<any, AirQualityOpts>();
AirQuality.set(1, {
  message: "Good",
});
AirQuality.set(2, {
  message: "Fair",
});
AirQuality.set(3, {
  message: "Moderate",
});
AirQuality.set(4, {
  message: "Poor",
});
AirQuality.set(5, {
  message: "Very Poor",
});

export function calWeather(array: any, dayAfter: number): any {
  const today = new Date();

  const year = today.getFullYear();
  const month = ("0" + (today.getMonth() + 1)).slice(-2);
  const day = ("0" + (today.getDate() + dayAfter)).slice(-2);
  const dateString = year + "-" + month + "-" + day;

  const calDay = array?.filter((data: any) => {
    const calDay = data.dt_txt.split(" ")[0];
    if (dateString === calDay) {
      return true;
    } else {
      return false;
    }
  });

  const combinationDay = calDay?.reduce((prev: any, curr: any) => {
    return {
      ...prev,
      feels_like: prev.main.feels_like + curr.main.feels_like,
      main: {
        ...prev.main,
        temp: prev.main.temp + curr.main.temp,
        humidity: prev.main.humidity + curr.main.humidity,
      },
      pop: prev.pop + curr.pop,
      DayOfTheWeek: getDayOfWeek(prev.dt_txt.split(" ")[0]),
    };
  });

  return { calDay, combinationDay };
}

export function getDayOfWeek(day: string): string {
  //ex) getDayOfWeek('2022-06-13')
  const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const dayOfWeek = week[new Date(day).getDay()];

  if (day === "today") {
    return week[new Date().getDay()];
  }

  return dayOfWeek;
}

export function getAMPM(time: string): string {
  const timeNumber = +time;
  const ampm = timeNumber >= 12 ? "PM" : "AM";
  return `${timeNumber}${ampm}`;
}
