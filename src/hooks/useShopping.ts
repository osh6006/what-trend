import { useQuery } from "react-query";
import {
  getAllShoppingTrends,
  getShoppingSearchData,
} from "../api/shopping/shopping";

export default function useShopping() {
  const naverShopQuery = useQuery(["naver-rank"], getShoppingSearchData, {});

  const allTrendsQuery = useQuery(
    ["all-shopping-trends"],
    getAllShoppingTrends,
    {
      staleTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false,
    }
  );
  return { allTrendsQuery, naverShopQuery };
}
