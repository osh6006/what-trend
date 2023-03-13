import React from "react";
import { useQuery } from "react-query";
import { soccerTeamParsing } from "../../api/sports/soccer";

export default function useSoccer() {
  const soccerTeamQuery = useQuery(["soccerTeam"], () => soccerTeamParsing(), {
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
    select: (data: any) => {
      console.log(data);
    },
  });

  return { soccerTeamQuery };
}
