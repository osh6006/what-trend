import React from "react";
import Chart from "react-apexcharts";
import { KALBIN } from "../../util/weather";

export const TodayGraph = ({ today }: any) => {
  console.log(today);

  return (
    <div className="w-[80%]">
      <Chart
        type="bar"
        series={[
          {
            name: "오늘의 기온",
            data: today?.calDay.map((data: any) => {
              return Math.floor(data?.main.temp - KALBIN);
            }),
          },
        ]}
        options={{
          plotOptions: {
            bar: {
              columnWidth: "45%",
              distributed: true,
              horizontal: false,
              dataLabels: {
                position: "center",
              },
            },
          },
          xaxis: {
            categories: today?.calDay.map((data: any) => {
              return data?.dt_txt.split(" ")[1];
            }),
          },
          chart: {
            foreColor: "#fff",
          },
        }}
      ></Chart>
    </div>
  );
};
