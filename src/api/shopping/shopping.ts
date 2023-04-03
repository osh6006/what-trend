import axios from "axios";
import * as cheerio from "cheerio";
import { fetchHTMLData } from "../../util/all";

export async function getSearchShoppingTrends() {
  return axios
    .get("/v1/search/shop.json", {
      params: {
        query: "정장",
        display: 20,
      },
      headers: {
        "X-Naver-Client-Id": process.env.REACT_APP_NAVER_CLIENT_ID,
        "X-Naver-Client-Secret": process.env.REACT_APP_NAVER_SECRET,
      },
    })
    .then(res => res.data);
}

export const naverShoppingParsing = async () => {
  // 위에서 추출한 HTML 전체 가져오기
  const html = await fetchHTMLData("/best/topics");
  const $ = cheerio.load(html.data);
  console.log(html.data);

  console.log("start");

  const $todayRank = $(
    "#wrap > div.customRanking_pc_custom_ranking__2hTOv > h3"
  ).text();

  console.log($todayRank);

  return true;
};

export const getShoppingSearchData = async () => {
  const search = await getSearchShoppingTrends();
  return search;
};

export const getAllShoppingTrends = async () => {
  const naver = await naverShoppingParsing();

  return naver;
};
