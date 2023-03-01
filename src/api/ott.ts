import axios from "axios";
import * as cheerio from "cheerio";

interface Rank {
  rank: string;
  title: string;
  point: string;
}

async function fetchRankData(kind: string) {
  const API_URL = `/top10/${kind}/world/today/full/`;
  const data = await axios.get(API_URL);
  return data;
}

async function helpParsing(kind: string) {
  const html = await fetchRankData(kind);
  const $ = cheerio.load(html.data);

  const $movieRanks = $(
    `#${kind}-1 > div.-mx-content > div > div > table > tbody > tr`
  );
  const $tvRanks = $(
    `#${kind}-2 > div.-mx-content > div > div > table > tbody > tr`
  );

  let movieRankArr: Rank[] = [];
  let tvRankArr: Rank[] = [];

  $movieRanks.each((idx, node) => {
    const title = $(node).find(".table-td > a").text();
    const rank = $(node).find("td:nth-child(1)").text();
    const point = $(node).find("td:nth-child(4)").text();

    movieRankArr.push({
      title,
      rank,
      point,
    });
  });

  $tvRanks.each((idx, node) => {
    const title = $(node).find(".table-td > a").text();
    const rank = $(node).find("td:nth-child(1)").text();
    const point = $(node).find("td:nth-child(4)").text();

    tvRankArr.push({
      title,
      rank,
      point,
    });
  });

  return { movie: movieRankArr, tv: tvRankArr };
}

export const homeNetflixRankParsing = async () => {
  return await helpParsing("netflix");
};

export const homeDisenyRankParsing = async () => {
  return await helpParsing("disney");
};

export const homeAmazonRankParsing = async () => {
  return await helpParsing("amazon-prime");
};
