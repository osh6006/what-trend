import * as cheerio from "cheerio";
import { fetchHTMLData } from "../util/all";

interface HumorRank {
  title: string;
  rank: string;
  visitor: string;
}

// 파싱
export const homeHumorRankParsing = async () => {
  // 위에서 추출한 HTML 전체 가져오기
  const html = await fetchHTMLData("/ranking");
  const $ = cheerio.load(html.data);
  const $ranks = $("#ranking > .sites > .site");
  let rankArr: HumorRank[] = [];

  $ranks.each((idx, node) => {
    const title = $(node).find(".info .title").text();
    const rank = $(node).find(".rank").text();
    const visitor = $(node).find(".visitor").text();

    // 오브젝트 형식으로 배열에 담기
    rankArr.push({
      title,
      rank,
      visitor,
    });
  });
  return rankArr;
};
