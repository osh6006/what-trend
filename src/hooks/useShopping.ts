import { useQuery } from "react-query";
import { getShppingSearchData } from "../api/shopping/shopping";

export default function useShopping() {
  const naverShopQuery = useQuery(
    ["naver-rank"],
    async () => getShppingSearchData,
    {
      staleTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false,
    }
  );
  return naverShopQuery;
}
