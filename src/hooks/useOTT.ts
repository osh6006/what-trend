import { useQuery } from "react-query";
import { homeDisenyRankParsing, homeNetflixRankParsing } from "../api/ott";
import { returnTopSomething } from "../util/home";

interface Rank {
  rank: string;
  title: string;
  point: string;
}

export default function useOTT() {
  const homeNeflixQuery = useQuery(
    ["homeNeflix"],
    () => homeNetflixRankParsing(),
    {
      staleTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false,
      select: (data: any) => {
        const movieTop10: Rank[] = returnTopSomething(data.movie, 10);
        const tvTop10: Rank[] = returnTopSomething(data.movie, 10);
        return { movieTop10, tvTop10 };
      },
    }
  );

  const homeDisneyQuery = useQuery(
    ["homeDisney"],
    () => homeDisenyRankParsing(),
    {
      staleTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false,
      select: (data: any) => {
        const movieTop10 = returnTopSomething(data.movie, 10);
        const tvTop10 = returnTopSomething(data.movie, 10);
        return { movieTop10, tvTop10 };
      },
    }
  );

  return { homeNeflixQuery, homeDisneyQuery };
}
