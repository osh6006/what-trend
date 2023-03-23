import { useQuery } from "react-query";
import { OttRankOpts, ottRankParsing } from "../../api/ott/ott";

export default function useOtt(kind?: string, country?: string) {
  const ottopt: OttRankOpts = { kind, country };
  console.log(ottopt);

  const ottQuery = useQuery(["Ott", ottopt], () => ottRankParsing(ottopt), {
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });

  if (kind) {
    return { ottQuery };
  }

  return undefined;
}
