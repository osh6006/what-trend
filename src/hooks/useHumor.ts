import { useQuery } from "react-query";
import { homeHumorRankParsing } from "../api/humor";
import { returnTopSomething } from "../util/home";

export default function useHumor() {
  const homeHumorQuery = useQuery(
    ["weatherThreeDays"],
    () => homeHumorRankParsing(),
    {
      staleTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false,
      select: (data: any) => {
        const top5 = returnTopSomething(data, 5);
        return top5;
      },
    }
  );

  return { homeHumorQuery };
}
