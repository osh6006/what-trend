import { useQuery } from "react-query";
import { premierPlayerParsing } from "../../api/sports/soccerPlayer";

export default function useSoccerPlayer(league?: string) {
  const premirePlayerQuery = useQuery(
    ["premirePlayer"],
    () => premierPlayerParsing(),
    {
      staleTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false,
    }
  );
  return { premirePlayerQuery };
}
