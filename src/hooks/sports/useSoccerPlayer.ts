import { useQuery } from "react-query";
import {
  premierPlayerParsing,
  SoccerPlayerRank,
} from "../../api/sports/soccerPlayer";

export default function useSoccerPlayer(league?: string) {
  const premirePlayerQuery = useQuery(
    ["premirePlayer"],
    () => premierPlayerParsing(),
    {
      staleTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false,
    }
  );

  // if (league === "all") {
  //   return [];
  // }
  // if (league === "premier") {
  //   return premirePlayerQuery;
  // }
  // if (league === "seriea") {
  //   return [];
  // }
  // if (league === "primera") {
  //   return [];
  // }
  // if (league === "bundesliga") {
  //   return [];
  // }
  // if (league === "ligue1") {
  //   return [];
  // }
  // return undefined;
  return premirePlayerQuery;
}
