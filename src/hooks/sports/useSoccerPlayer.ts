import { useState } from "react";
import { bundesligaLeagueParsing } from "./../../api/sports/soccerTeam";
import { useQueries, useQuery } from "react-query";
import {
  allPlayerParsing,
  bundesligaPlayerParsing,
  ligue1PlayerParsing,
  premierPlayerParsing,
  primeraPlayerParsing,
  serieaPlayerParsing,
  SoccerPlayerRank,
} from "../../api/sports/soccerPlayer";

interface PlayerObj {
  testPlayer: SoccerPlayerRank[];
  testKeeper: SoccerPlayerRank[];
}

export default function useSoccerPlayer(league?: string) {
  const [testP, setTestP] = useState<PlayerObj>({
    testPlayer: [],
    testKeeper: [],
  });
  const premirePlayerQuery = useQuery(
    ["premirePlayer"],
    () => premierPlayerParsing(),
    {
      staleTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false,
    }
  );
  const primeraPlayerQuery = useQuery(
    ["primeraPlayer"],
    () => primeraPlayerParsing(),
    {
      staleTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false,
    }
  );
  const serieaPlayerQuery = useQuery(
    ["serieaPlayer"],
    () => serieaPlayerParsing(),
    {
      staleTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false,
    }
  );
  const bundesligaPlayerQuery = useQuery(
    ["bundesligaPlayer"],
    () => bundesligaPlayerParsing(),
    {
      staleTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false,
    }
  );
  const ligue1PlayerQuery = useQuery(
    ["ligue1Player"],
    () => ligue1PlayerParsing(),
    {
      staleTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false,
    }
  );

  const allPlayerQuery = useQuery(
    ["allSoccerPlayer"],
    () => allPlayerParsing(),
    {
      staleTime: 1000 * 60 * 5,
      refetchOnWindowFocus: true,
      select(data) {
        let player: SoccerPlayerRank[] = data?.premier.player.concat(
          data?.primera.player,
          data?.seriea.player,
          data?.bundesliga.player,
          data?.ligue1.player
        );
        let goalkeeper: SoccerPlayerRank[] = data?.premier.goalkeeper.concat(
          data?.primera.goalkeeper,
          data?.seriea.goalkeeper,
          data?.bundesliga.goalkeeper,
          data?.ligue1.goalkeeper
        );

        player.sort(
          (a: SoccerPlayerRank, b: SoccerPlayerRank) =>
            +b.goal + +b.assist + +b.value - (+a.goal + +a.assist + +a.value)
        );

        goalkeeper.sort(
          (a: SoccerPlayerRank, b: SoccerPlayerRank) =>
            +b.save +
            +b.cleanSheets +
            +b.value -
            (+a.save + +a.cleanSheets + +a.value)
        );

        player = player.filter((el, i) => i <= 19);
        goalkeeper = goalkeeper.filter((el, i) => i <= 19);

        return { player, goalkeeper };
      },
    }
  );

  // const allPlayerQueryTest = useQueries([
  //   {
  //     queryKey: ["premirePlayer"],
  //     queryFn: premierPlayerParsing,
  //     onSuccess(data: any) {
  //       setTestP(state => {
  //         return {
  //           testPlayer: state.testPlayer.concat(data.player),
  //           testKeeper: state.testKeeper.concat(data.goalkeeper),
  //         };
  //       });
  //     },
  //   },
  //   {
  //     queryKey: ["primeraPlayer"],
  //     queryFn: primeraPlayerParsing,
  //     onSuccess(data: any) {
  //       setTestP(state => {
  //         return {
  //           testPlayer: state.testPlayer.concat(data.player),
  //           testKeeper: state.testKeeper.concat(data.goalkeeper),
  //         };
  //       });
  //     },
  //   },
  //   {
  //     queryKey: ["serieaPlayer"],
  //     queryFn: serieaPlayerParsing,
  //     onSuccess(data: any) {
  //       setTestP(state => {
  //         return {
  //           testPlayer: state.testPlayer.concat(data.player),
  //           testKeeper: state.testKeeper.concat(data.goalkeeper),
  //         };
  //       });
  //     },
  //   },
  //   {
  //     queryKey: ["bundesligaPlayer"],
  //     queryFn: bundesligaLeagueParsing,
  //     onSuccess(data: any) {
  //       setTestP(state => {
  //         return {
  //           testPlayer: state.testPlayer.concat(data.player),
  //           testKeeper: state.testKeeper.concat(data.goalkeeper),
  //         };
  //       });
  //     },
  //   },
  //   {
  //     queryKey: ["ligue1Player"],
  //     queryFn: ligue1PlayerParsing,
  //     onSuccess(data: any) {
  //       setTestP(state => {
  //         return {
  //           testPlayer: state.testPlayer.concat(data.player),
  //           testKeeper: state.testKeeper.concat(data.goalkeeper),
  //         };
  //       });
  //     },
  //   },
  // ]);

  if (league === "all") {
    return allPlayerQuery;
  }
  if (league === "premier") {
    return premirePlayerQuery;
  }
  if (league === "seriea") {
    return serieaPlayerQuery;
  }
  if (league === "primera") {
    return primeraPlayerQuery;
  }
  if (league === "bundesliga") {
    return bundesligaPlayerQuery;
  }
  if (league === "ligue1") {
    return ligue1PlayerQuery;
  }

  return undefined;
}
