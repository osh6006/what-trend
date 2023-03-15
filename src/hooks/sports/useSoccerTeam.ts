import {
  allLeagueParsing,
  bundesligaLeagueParsing,
  ligue1LeagueParsing,
  premierLeagueParsing,
  primeraLeagueParsing,
  serieaLeagueParsing,
  teamRank,
} from "../../api/sports/soccerTeam";
import { useQuery } from "react-query";

export default function useSoccer(kind?: string) {
  const premierLeagueQuery = useQuery(
    ["premierLeague"],
    () => premierLeagueParsing(),
    {
      staleTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false,
      select: (data: teamRank[]) => {
        const top3 = data.filter((el: any, i: number) => i < 3);
        const rest = data.filter((el: any, i: number) => i >= 3);
        return { top3, rest };
      },
    }
  );

  const serieaLeagueQuery = useQuery(
    ["serieaLeague"],
    () => serieaLeagueParsing(),
    {
      staleTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false,
      select: (data: teamRank[]) => {
        const top3 = data.filter((el: any, i: number) => i < 3);
        const rest = data.filter((el: any, i: number) => i >= 3);
        return { top3, rest };
      },
    }
  );

  const primeraLeagueQuery = useQuery(
    ["primeraLeague"],
    () => primeraLeagueParsing(),
    {
      staleTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false,
      select: (data: teamRank[]) => {
        const top3 = data.filter((el: any, i: number) => i < 3);
        const rest = data.filter((el: any, i: number) => i >= 3);
        return { top3, rest };
      },
    }
  );

  const bundesligaLeagueQuery = useQuery(
    ["bundesligaLeague"],
    () => bundesligaLeagueParsing(),
    {
      staleTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false,
      select: (data: teamRank[]) => {
        const top3 = data.filter((el: any, i: number) => i < 3);
        const rest = data.filter((el: any, i: number) => i >= 3);
        return { top3, rest };
      },
    }
  );

  const ligue1LeagueQuery = useQuery(
    ["ligue1League"],
    () => ligue1LeagueParsing(),
    {
      staleTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false,
      select: (data: teamRank[]) => {
        const top3 = data.filter((el: any, i: number) => i < 3);
        const rest = data.filter((el: any, i: number) => i >= 3);
        return { top3, rest };
      },
    }
  );

  const allLeagueQuery = useQuery(["allLeague"], () => allLeagueParsing(), {
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
    select: (data: teamRank[]) => {
      const top3 = data.filter((el: any, i: number) => i < 3);
      const rest = data.filter((el: any, i: number) => i >= 3 && i <= 20);
      return { top3, rest };
    },
  });

  if (kind === "all") {
    return allLeagueQuery;
  }
  if (kind === "premier") {
    return premierLeagueQuery;
  }
  if (kind === "seriea") {
    return serieaLeagueQuery;
  }
  if (kind === "primera") {
    return primeraLeagueQuery;
  }
  if (kind === "bundesliga") {
    return bundesligaLeagueQuery;
  }
  if (kind === "ligue1") {
    return ligue1LeagueQuery;
  }
  return undefined;
}
