import { useQuery } from "react-query";
import { homeHumorRankParsing } from "../api/humor";

export default function useHumor() {
  const homeHumorQuery = useQuery(
    ["weatherThreeDays"],
    () => homeHumorRankParsing(),
    {
      staleTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false,
      select: (data: any) => {
        const top5 = data.filter((el: any, i: number) => {
          if (i < 5) {
            return true;
          } else {
            return false;
          }
        });

        return top5;
      },
    }
  );

  return { homeHumorQuery };
}
