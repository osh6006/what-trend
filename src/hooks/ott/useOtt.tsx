import { useQuery } from "react-query";
import {
  ottDetailParsing,
  OttRankOpts,
  ottRankParsing,
} from "../../api/ott/ott";

export default function useOtt(kind?: string, country?: string, id?: string) {
  const ottopt: OttRankOpts = { kind, country };

  const ottQuery = useQuery([`Ott`, ottopt], () => ottRankParsing(ottopt), {
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });

  const titleId = id || ottQuery?.data?.movie[0].id;

  const ottDetailQuery = useQuery(
    [`OttDetail`, titleId],
    () => ottDetailParsing(titleId),
    {
      staleTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false,
      enabled: !!titleId,
    }
  );

  return { ottQuery, ottDetailQuery };
}
