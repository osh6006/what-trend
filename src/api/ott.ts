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

export const homeNetflixRankParsing = async () => {
  const html = await fetchRankData("netflix");
  const $ = cheerio.load(html.data);

  const $movieRanks = $(
    "#netflix-1 > div.-mx-content > div > div > table > tbody > tr"
  );
  const $tvRanks = $(
    "#netflix-2 > div.-mx-content > div > div > table > tbody > tr"
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
};

export const homeDisenyRankParsing = async () => {
  const html = await fetchRankData("disney");
  const $ = cheerio.load(html.data);

  const $movieRanks = $(
    "#disney-1 > div.-mx-content > div > div > table > tbody > tr"
  );
  const $tvRanks = $(
    "#disney-2 > div.-mx-content > div > div > table > tbody > tr"
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
};
