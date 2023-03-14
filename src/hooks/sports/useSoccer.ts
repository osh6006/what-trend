import { teamRank } from "./../../api/sports/soccer";
import { useQuery } from "react-query";
import { soccerTeamParsing } from "../../api/sports/soccer";

export default function useSoccer() {
  const soccerTeamQuery = useQuery(["soccerTeam"], () => soccerTeamParsing(), {
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
    select: (data: teamRank[]) => {
      const top3 = data.filter((el: any, i: number) => i < 3);
      const rest = data.filter((el: any, i: number) => i >= 3);
      return { top3, rest };
    },
  });

  return { soccerTeamQuery };
}
