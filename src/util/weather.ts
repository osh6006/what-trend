interface AirQualityOpts {
  message: string;
}

export interface City {
  city: string;
}

export const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

export const CityOpts: City[] = [
  {
    city: "Seoul",
  },
  {
    city: "Busan",
  },
  {
    city: "Daegu",
  },
  {
    city: "Ulsan",
  },
  {
    city: "Incheon",
  },
  {
    city: "Gwangju",
  },
  {
    city: "Daejeon",
  },
];

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

type DayKind = "day" | "month";
function getFutherDay(futherDay: number, dayKind: DayKind): string {
  const today = new Date();
  if (dayKind === "month") {
    return String(
      new Date(today.getTime() + futherDay * 24 * 60 * 60 * 1000).getMonth() + 1
    ).padStart(2, "0");
  }
  if (dayKind === "day") {
    return String(
      new Date(today.getTime() + futherDay * 24 * 60 * 60 * 1000).getDate()
    ).padStart(2, "0");
  }
  return "";
}

export function calWeather(array: any, dayAfter: number): any {
  const today = new Date();
  const year = today.getFullYear();
  const month = getFutherDay(dayAfter, "month");
  const day = getFutherDay(dayAfter, "day");
  const dateString = year + "-" + month + "-" + day;

  const calDay = array?.filter((data: any) => {
    const day = data.dt_txt.split(" ")[0];
    if (dateString === day) {
      return true;
    } else {
      return false;
    }
  });

  let combinationDay;

  if (calDay.length > 0) {
    combinationDay = calDay?.reduce((prev: any, curr: any) => {
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
  }

  if (combinationDay) {
    return { calDay, combinationDay };
  }
}

export function getDayOfWeek(day: string): string {
  //ex) getDayOfWeek('2022-06-13')
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

export function getWeek(): string {
  return `${
    week[new Date(new Date().getDay()).getDay()]
  } ${new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
  }).format(new Date())}`;
}
