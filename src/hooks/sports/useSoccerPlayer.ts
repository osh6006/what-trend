import { useQuery } from "react-query";
import {
  premierPlayerParsing,
  SoccerPlayer,
} from "../../api/sports/soccerPlayer";

export default function useSoccerPlayer() {
  const testQuery = useQuery(["asdf"], () => premierPlayerParsing(), {
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
    onSuccess: (data: SoccerPlayer[]) => {},
  });
  return { testQuery };
}
